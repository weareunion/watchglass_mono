"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config({ path: __dirname + '/./../.env' });
var server_1 = require("./client/server");
/**
 * We start by booting the WatchGlass Main Server. This is the functional backbone of both
 * receiving and requesting data from internal and external networks
 */
// Create the instance
var WatchGlassCoreServerInstance = new server_1.default();
// Boot the server
WatchGlassCoreServerInstance.boot();
//# sourceMappingURL=bootstrap.js.map