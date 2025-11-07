const express = require('express');
const _ = express.Router();

_.get("/login", (req, res)=> {
    res.send("Hello this is login")
})

module.exports = _;