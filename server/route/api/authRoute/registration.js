const express = require('express');
const _ = express.Router();
const RegistrationController = require('../../../controllers/authController/registrationController');

_.post('/registration', RegistrationController);

module.exports = _;