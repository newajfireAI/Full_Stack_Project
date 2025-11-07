const express = require('express');
const _ = express.Router();
const registrationControl = require('../../../controllars/registrationControl')


_.post("/registration", registrationControl)

module.exports = _;