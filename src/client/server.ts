import express from "express";
import ClientWebserver from "./express/webserver";
class WatchGlassCoreServer {
    constructor() {
    }
    boot(){
        // Start the client express backend
        let ClientWebserverInstance = new ClientWebserver()
        ClientWebserverInstance.boot()
    }
}

export default WatchGlassCoreServer