const net = require ('net');

class XPlayOutTcp {
    connected = false;
    reconnecting = false;

    constructor(host, port, updateStatus) {
        console.log("Initializing XPlayOutTcp");
        this.host = host;
        this.port = port;
        this.updateStatus = updateStatus; // Store the updateStatus method
        this.client = new net.Socket();
        this.connected = false; // Flag to track connection status
        this.initListeners();
    }

    initListeners() {
        this.client.on('error', (err) => {
            console.log('error', 'Network error: ' + err.message);
            this.connected = false; // Update the connection flag
            this.handleNetworkIssue(err); // Handle network issue
        });

        this.client.on('connect', () => {
            console.log('info', 'TCP client connected to ' + this.host + ':' + this.port);
            this.connected = true; // Update the connection flag
        });

        this.client.on('close', () => {
            console.log('info', 'TCP client disconnected');
            this.connected = false; // Update the connection flag
            this.handleDisconnect(); // Handle disconnection
        });
    }

    async connect() 
    {
        if (this.connected) {
            return true;
        }
        this.client.removeAllListeners('error');
        this.client.removeAllListeners('connect');
        this.client.removeAllListeners('close');

        return new Promise((resolve, reject) => {
            // Clear previous event listeners to avoid memory leaks
            this.initListeners();

            const timeout = setTimeout(() => {
                this.client.destroy(); // Forcefully close the socket
                reject(new Error('Connection attempt timed out'));
            }, 5000); // 5 seconds timeout

            this.client.connect(this.port, this.host, () => {
                clearTimeout(timeout);
                console.log('Connected to server');
                this.connected = true;
                resolve(true); // Resolve the promise with true when connected
            });

            this.client.on('error', (err) => {
                clearTimeout(timeout);
                console.error('Error connecting to server:', err.message);
                this.connected = false;
                this.handleNetworkIssue(err); // Handle network issue
                reject(false); // Reject the promise with false when connection fails
            });

            this.client.on('close', () => {
                clearTimeout(timeout);
                console.log('info', 'TCP client disconnected');
                this.connected = false;
                this.handleDisconnect(); // Handle disconnection
                reject(new Error('Connection closed before being established'));
            });
        });
    }

    handleNetworkIssue(error) 
    {
        console.log('Handling network issue:', error.message);
        this.updateStatus('NetworkIssue');
    }

    handleDisconnect() 
    {
        console.log('Handling disconnect');
        this.updateStatus('Disconnected');
    }
    //------------------------------------------------------------------------------------------------
    // General function that manages sending a single TCP command to the XPlayOutTcp instance
    //------------------------------------------------------------------------------------------------

    async sendCommand(command) 
    {
        return new Promise((resolve, reject) => {
            // Check if the socket is writable and connected
            if (this.connected && this.client.writable) {
                //console.log('Sending command:', command);
                const timeout = setTimeout(() => {
                    reject(new Error('Command response timeout')); // Reject promise if no response is received within timeout
                }, 5000); // Adjust timeout as needed
    
                this.client.write(command, (err) => {
                    clearTimeout(timeout); // Clear the timeout if response is received before timeout
                    if (err) {
                        console.log('Error sending command:', err.message);
                        reject(err); // Reject promise if there's an error in writing the command
                    }
                });
    
                // Handle response from server
                this.client.once('data', (data) => {
                    resolve(data.toString()); // Resolve with response from server
                });
            } else {
                console.log('Socket is not writable or not connected');
                //reject(new Error('Socket is not writable or not connected'));
                this.connected = false;
                return false;
            }
        });
    }
    
    

    //------------------------------------------------------------------------------------------------
    // CALLBACK FUNCTIONS (JUST DEFINES THE COMMAND STRING AND CALLS sendCommand)
    //------------------------------------------------------------------------------------------------

    async GetStatus() 
    {
        return await this.sendCommand('|GETSIMPLESTATUS|');
    }

    async GetInfo() 
    {
        return await this.sendCommand('|GETINFO|');
    }

    //--------------------------------------------------------------------------

    async PLAY() {
        return await this.sendCommand('|PLAY|');
    }

    async STOP() {
        await this.sendCommand('|STOP|');
    }

    async PAUSE() {
        await this.sendCommand('|PAUSE|');
    }

    async JUMPIFNOV() {
        await this.sendCommand('|JUMPIFNOV|');
    }

    async JUMPIFLINE() {
        await this.sendCommand('|JUMPIFLINE|');
    }

    async JUMPANDREPEAT() {
        await this.sendCommand('|JUMPANDREPEAT|');
    }
    
    async JUMPTOLINE() {
        await this.sendCommand('|JUMPTOLINE|');
    }

    async JUMP() {
        await this.sendCommand('|JUMP|');
    }

    async BLACK() {
        await this.sendCommand('|BLACK|');
    }

    async SWITCHERON() {
        await this.sendCommand('|SWITCHERON|');
    }
    
    async SWITCHEROFF() {
        await this.sendCommand('|SWITCHEROFF|');
    }
    
    async AUTOFILLON() {
        await this.sendCommand('|AUTOFILLON|');
    }
    
    async AUTOFILLOFF() {
        await this.sendCommand('|AUTOFILLOFF|');
    }

    async AUTOCGON() {
        await this.sendCommand('|AUTOCGON|');
    }

    async AUTOCGOFF() {
        await this.sendCommand('|AUTOCGOFF|');
    }

    async LOOPON() {
        await this.sendCommand('|LOOPON|');
    }

    async LOOPOFF() {
        await this.sendCommand('|LOOPOFF|');
    }

    async EXACTTIMEON() {
        await this.sendCommand('|EXACTTIMEON|');
    }

    async EXACTTIMEOFF() {
        await this.sendCommand('|EXACTTIMEOFF|');
    }
    
    async ALWAYSPREPAREON() {
        await this.sendCommand('|ALWAYSPREPAREON|');
    }

    async ALWAYSPREPAREOFF() {
        await this.sendCommand('|ALWAYSPREPAREOFF|');
    }
    
    async ADDITEM() {
        await this.sendCommand('|ADDITEM|');
    }

    async PLAYLISTLOAD() {
        await this.sendCommand('|PLAYLISTLOAD|');
    }

    async PLAYLISTSAVE() {
        await this.sendCommand('|PLAYLISTLOAD|');
    }

    async PLAYITEM() {
        await this.sendCommand('|PLAYITEM|');
    }

    async PLAYSPLIT() {
        await this.sendCommand('|PLAYSPLIT|');
    }
    
    async MOVEUP() {
        await this.sendCommand('|MOVEUP|');
    }

    async MOVEDOWN() {
        await this.sendCommand('|MOVEDOWN|');
    }

    async GETTHUMB() {
        await this.sendCommand('|GETTHUMB|');
    }

    async AUTO() {
        await this.sendCommand('|AUTO|');
    }

}

module.exports = {XPlayOutTcp}
