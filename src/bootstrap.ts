require('dotenv').config({path:__dirname+'/./../.env'})
import WatchGlassCoreServer from "./client/server";

/**
 * We start by booting the WatchGlass Main Server. This is the functional backbone of both
 * receiving and requesting data from internal and external networks
 */

// Create the instance
let WatchGlassCoreServerInstance = new WatchGlassCoreServer();

// Boot the server
WatchGlassCoreServerInstance.boot()