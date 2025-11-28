const express = require('express');
const _ = express.Router();
const LoginController = require('../../../controllers/authController/loginController');

_.post('/login', LoginController);

module.exports = _;