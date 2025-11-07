const express = require("express");
const _ = express.Router();
const registration = require("./authentication/registration") 
const login = require("./authentication/login") 

_.use("/authentication", registration);
_.use("/authentication", login);

module.exports = _;
