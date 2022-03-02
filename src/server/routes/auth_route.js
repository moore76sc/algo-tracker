/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth_controller.js');

router.get('/', (req, res) => {
  return res.status(201);
});

router.get('/verify', authController.verify, (req, res) => {
  if (res.locals.userData) {
    res.status(200).json({ userData: res.locals.userData });
  } else {
    res.status(200).json(null);
  }
});

router.get('/github', (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
  );
});

router.get('/getAll', authController.getAllUsers, (req, res) => {
  return res.status(201).json({ entries: res.locals.users });
});


router.get('/callback', authController.cb, authController.addUser, authController.addCookie, (req, res) => {
  res.redirect('http://localhost:8080/');
});



module.exports = router;
