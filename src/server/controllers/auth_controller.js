/* eslint-disable no-undef */
const db = require('../models/auth_model.js');
const axios = require('axios');
const { Octokit } = require("@octokit/rest");
const signAccessToken = require('../helpers/jwt.helpers');
const JWT = require('jsonwebtoken');
const authController = {};
require('dotenv').config();

authController.getAllUsers = async (req, res, next) => {
  try {
    const queryString = `SELECT * FROM users;`;
    const { rows } = await db.query(queryString);
    res.locals.users = rows;
    return next();
  } catch (error) {
    return res.status(400).send(`Failed to retrieve users! ${error}`);
  }
};

authController.cb = async ({ query: { code } }, res, next) => {
  try {
    const opts = { headers: { accept: 'application/json' } };
    const body = { client_id: process.env.GITHUB_CLIENT_ID, client_secret: process.env.client_secret, code };
    const postRes = await axios.post('https://github.com/login/oauth/access_token', body, opts);
    if (postRes.data.error) throw (postRes.data.error);

    const token = postRes.data.access_token;
    res.locals.JWT = await signAccessToken(token);
    const octokit = new Octokit({ auth: token });
    const result = await octokit.request('GET /user');

    res.locals.userData = {
      id: result.data.id,
      login: result.data.login,
      name: result.data.name,
      access_token: token
    };
    return next();
  } catch (error) {
    return res.status(400).send(`error in Oauth callback! ${error}`);
  }
};

authController.addUser = async (req, res, next) => {
  try {
    if (!res.locals.userData) throw ('no user data'); //check if user exists in our database
    const query = `SELECT * FROM users WHERE _id = ${res.locals.userData.id};`;
    const { rows } = await db.query(query);
    if (!rows[0]) { // if user doesnt exist, input userData into database
      const query = `INSERT INTO users (_id, github_username, name, access_token) VALUES (${res.locals.userData.id}, '${res.locals.userData.login}', '${res.locals.userData.name}', '${res.locals.userData.access_token}');`;
      await db.query(query);
    } else { // else update access token
      const query = `UPDATE users SET access_token = '${res.locals.userData.access_token}' WHERE _id = ${res.locals.userData.id};`;
      await db.query(query);
    }

    return next();
  } catch (error) {
    return res.status(400).send(`error in authController.addUser! ${error}`);
  }
};

authController.addCookie = async (req, res, next) => {
  try {
    if (!res.locals.JWT) throw ('no user data');
    res.cookie('JWT_token', res.locals.JWT, { httpOnly: true },);
    return next();
  } catch (error) {
    return res.status(400).send(`error in authController.addCookie! ${error}`);
  }
};

authController.verify = async (req, res, next) => {
  try {
    if (req.cookies.JWT_token) {
      const payload = await JWT.verify(req.cookies.JWT_token, process.env.jwt_secret);
      if (!payload.aud) return next();
      const octokit = new Octokit({ auth: payload.aud });
      const result = await octokit.request('GET /user');
      res.locals.userData = result.data;
    }
    return next();
  } catch (error) {
    if (error?.response?.data?.message === 'Bad credentials') {
      return next();
    }
    return res.status(400).send(`error in authController.verify! ${error}`);
  }
};


module.exports = authController;
