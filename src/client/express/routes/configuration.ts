const express = require('express');
const ConfigurationRouter = express.Router()
ConfigurationRouter.get('/', function (req, res) {
    res.send('Wiki home page');
})

module.exports = ConfigurationRouter