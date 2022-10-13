const WiFiAP = {
    listAccessPoints: async () => {
        return new Promise((resolve, reject) => {
            const wifi = require('node-wifi');
// Initialize wifi module
// Absolutely necessary even to set interface to null
            wifi.init({
                iface: null // network interface, choose a random wifi interface if set to null
            });

// Scan networks
            wifi.scan((error, networks) => {
                if (error) {
                    console.log(error);
                    reject(networks)
                } else {
                    console.log(networks);
                    resolve(networks)

                }
            });
        })


    }
}

export default WiFiAP