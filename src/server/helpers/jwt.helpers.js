const JWT = require('jsonwebtoken');
const createError = require('http-errors');
require('dotenv').config();

const signAccessToken = (userId) => {
  return new Promise((resolve, reject) => {
    const payload = {};
    const secret = process.env.jwt_secret;
    const options = {
      expiresIn: "10h",
      audience: userId,
    };
    JWT.sign(payload, secret, options, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};


module.exports = { signAccessToken };
