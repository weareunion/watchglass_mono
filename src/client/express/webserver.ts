import WiFiAP from "./accesses/WiFiAP";
let cors = require('cors')

class ClientWebserver {
    boot(){
        const { auth } = require('express-openid-connect');
        const express = require('express');
        const app = express();
        const PORT = process.env.CLIENT_SERVER_PORT;

        app.listen(PORT, (error) =>{
                if(!error)
                    console.log("Server is Successfully Running and App is listening on port "+ PORT)
                else
                    console.log("Error occurred, server can't start", error);
            }
        );

        app.use(cors())

        const config = {
            authRequired: false,
            auth0Logout: true,
            secret: process.env.CLIENT_AUTH0_secret,
            baseURL: 'http://localhost:' + process.env.CLIENT_SERVER_PORT,
            clientID: 'YQz6irmJh1TS7Mpb01Dp0OXn76HOwPfD',
            issuerBaseURL: 'https://weareunion.us.auth0.com'
        };
        app.get('/device/wifi/list', async (req, res) => {
            let ap = await WiFiAP.listAccessPoints()
            res.send(ap)
        })
        app.use('/configuration', require('./routes/configuration'))
// auth router attaches /login, /logout, and /callback routes to the baseURL
        app.use(auth(config));

// req.isAuthenticated is provided from the auth router
        app.get('/', (req, res) => {
            let ap = WiFiAP.listAccessPoints()
            console.log(ap)
            res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
        });



    }
}

export default ClientWebserver