var express = require('express');
var ConfigurationRouter = express.Router();
ConfigurationRouter.get('/', function (req, res) {
    res.send('Wiki home page');
});
module.exports = ConfigurationRouter;
//# sourceMappingURL=configuration.js.map