/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth_controller.js');

router.get('/', (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
  );
});

router.get('/getAll', authController.getAllUsers, (req, res) => {
  return res.status(201).json({ entries: res.locals.users });
});


router.get('/callback', authController.cb, (req, res) => {
  res.redirect('http://localhost:8080/');
});

module.exports = router;
