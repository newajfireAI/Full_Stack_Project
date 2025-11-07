const express = require("express");
const _ = express.Router();
const apiIndex = require("./api/apiIndex")

_.use("/api/v1", apiIndex);

module.exports = _;
