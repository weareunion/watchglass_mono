"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var webserver_1 = require("./express/webserver");
var WatchGlassCoreServer = /** @class */ (function () {
    function WatchGlassCoreServer() {
    }
    WatchGlassCoreServer.prototype.boot = function () {
        // Start the client express backend
        var ClientWebserverInstance = new webserver_1.default();
        ClientWebserverInstance.boot();
    };
    return WatchGlassCoreServer;
}());
exports.default = WatchGlassCoreServer;
//# sourceMappingURL=server.js.map