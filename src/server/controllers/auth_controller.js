/* eslint-disable no-undef */
const db = require('../models/auth_model.js');
const axios = require('axios');
const { Octokit } = require("@octokit/rest");

const authController = {};

authController.getAllUsers = async (req, res, next) => {
  try {
    const queryString = `SELECT * FROM public.users;`;
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
    console.log('ps ', postRes.data);
    const token = postRes.data.access_token;

    const octokit = new Octokit({
      auth: token,
    });

    const result = await octokit.request('GET /user');
    console.log(' result', result);
    return next();
  } catch (error) {
    return res.status(400).send(`error in Oauth callback! ${error}`);
  }
};


module.exports = authController;
