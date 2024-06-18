const { InstanceBase, InstanceStatus, runEntrypoint } = require ( '@companion-module/base');
const { ConfigFields } = require ( './src/config.js');
const { getActionDefinitions } = require ( './src/actions.js');
const { getPresetsDefinitions } = require ( './src/presets.js');
const { getFeedbackDefinitions } = require( './src/feedbacks.js');

const {XPlayOutTcp} = require ('./communication_classes/XPlayOutTcp.js')

class XPLAYOUT extends InstanceBase 
{

    firstConnection = false;

    constructor(internal) 
    {
		super(internal)
		this.XPlay_Status = {}
        this.XPlay_Time_Info = {}
        this.remainingSeconds
        this.blinking = false
	}
    //--------------------------------------------------------------------------
    // Initialize ecustom classes and start status polling 
    //--------------------------------------------------------------------------
    async init(config) 
    {
        this.config = config;
        this.setActionDefinitions(getActionDefinitions(this));
        this.setPresetDefinitions(getPresetsDefinitions(this)); 
        this.setFeedbackDefinitions(getFeedbackDefinitions(this))
        this.checkConnectionStatus(config)
    }
    //--------------------------------------------------------------------------
    // Function that splits the status string into a usable object 
    // that will be use for feedbacks
    //--------------------------------------------------------------------------

    parseStatus(data) 
    {
        // Split the data string based on the '|' symbol
        const parts = data.split('|');
        // Define categories
        const categories = [
            'LastSave',
            'Iprg',
            'Iprox',
            'State',
            'AutoFill',
            'AutoCG',
            'Switcher',
            'AlwaysPrepare',
            'ExactTime',
            'Loop',
            'dPosizione'
        ];
        // Create an object to store the parsed data
        const parsedData = {};
        // Assign each part of the data to its corresponding category
        categories.forEach((category, index) => 
        {
            parsedData[category] = parts[index+1];
        });
        return parsedData;
    }

    //--------------------------------------------------------------------------

    parseInfo(data) 
    {
        // Split the data string based on the '|' symbol
        const parts = data.split('|');
        // Define categories
        const categories = [
            'cName',
            'position',
            'durata',
            'remain',
        ];  
        
        // Create an object to store the parsed data
        const parsedData = {};
    
        // Assign each part of the data to its corresponding category and divide by 10,000,000,000
        categories.forEach((category, index) => 
        {
            parsedData[category] = (parts[index+1]) ;
        });

        parsedData.position = this.parseInfoTime(parsedData.position)
        parsedData.durata =this.parseInfoTime(parsedData.durata)

        this.remainingSeconds = parsedData.remain /115740

        parsedData.remain = this.parseInfoTime(parsedData.remain )

        return parsedData;
    }

    parseInfoTime(data) 
    {
        //coldnt figure out the vb6 conversion, so i got the value 
        //from testing To be fixed later
        const second = 115740;
        var parsedDataIntoSeconds = data/second;
        var decimalMinuteValue  = parsedDataIntoSeconds/60;
        const totalSeconds = Math.floor(decimalMinuteValue * 60); // Convert minutes to seconds
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

        return `${formattedMinutes}:${formattedSeconds}`;
    }
    
    //--------------------------------------------------------------------------
	//  Check if connection to endpoint is valid, if it's valid, will start
	//  Status clock and will keep everything up to date, if not then status
	//  is set to show an Error message, this will show the user that the connection
	//  is invalid
	//--------------------------------------------------------------------------

    async checkConnectionStatus(config) 
    {

		if (!config.host || !config.port ) 
        {
			this.log("warn", "No configuration");
			this.updateStatus(InstanceStatus.BadConfig);
			return;
		}
	
		const connectAndSetup = async () => 
        {
            if(!this.XPlayoutTCPManager || !this.XPlayoutTCPManager.connected)
            {
                console.log("this.XPlayoutTCPManager")
                this.init_tcp();
            }

			try 
            {
				const isConnected = await this.connectionManager();
				if (isConnected && this.XPlayoutTCPManager.connected) 
                {
                    if(!this.firstConnection)
                    {
                        this.log('TCP Connection established!! Enjoy :D');
                        //Create polling function (TODO: make updating speed customizable)
                        this.createclock = setInterval(async () => {
                            await this.Status_Polling();
                            await this.getPositionInfo();
                        }, 1000);

                        this.updateStatus(InstanceStatus.Ok);

                        this.feedClock = setInterval(async () => {
                            this.feedChecker();
                        }, 250);
                        this.firstConnection=true;
                    }
				}
                else 
                {
					this.log('error', 'Connection failed. Retrying...');
					this.updateStatus(InstanceStatus.ConnectionFailure);
					//clearInterval(this.connectionManagerClock); // Clear the connection interval
					//setTimeout(connectAndSetup, 5000); // Retry after 5 seconds
                    this.firstConnection=false;

				}
			} 
            catch (error) 
            {
                this.firstConnection=false;
				this.log('error', 'Error during connection attempt: ' + error);
				this.clearIntervals();
				//setTimeout(connectAndSetup, 5000); // Retry after 5 seconds
			}
		};
	
		await connectAndSetup();
		// Set up interval for connection management
		this.connectionManagerClock = setInterval(connectAndSetup, 5000);
	}

    async connectionManager() 
    {
		try 
        {
			const res = await this.XPlayoutTCPManager.connect();
			this.log('info', 'Connection status: ' + res);
			return res;
		} 
        catch (error) 
        {
			this.log('error', 'API connection error: ' + error);
			return false;
		}
	}

    //--------------------------------------------------------------------------
	//  Check if connection to endpoint is valid, if it's valid, will start
	//  Status clock and will keep everything up to date, if not then status
	//  is set to show an Error message, this will show the user that the connection
	//  is invalid
	//--------------------------------------------------------------------------
	async Status_Polling() 
    {
		let res = await this.XPlayoutTCPManager.GetStatus();
		if (res) 
        {
            //TODO: Set status OBJ 
            this.XPlay_Status = this.parseStatus(res)
            //sconsole.log("this.XPlay_Status",this.XPlay_Status)
        }
        else 
        {
            console.log("Failed to get status ")
            this.updateStatus(InstanceStatus.Error);
		}
	}
    //--------------------------------------------------------------------------
    async getPositionInfo() 
    {
		let res = await this.XPlayoutTCPManager.GetInfo();
		if (res) 
        {
            //TODO: Set status OBJ 
            this.XPlay_Time_Info = this.parseInfo(res)
            //sconsole.log("this.XPlay_Status",this.XPlay_Status)
            //console.log("XPlay_Time_Info",this.XPlay_Time_Info)
		} else {
            console.log("Failed to get status ")
            this.updateStatus(InstanceStatus.Error);
		}
	}

    updateStatusFromoutside(value) 
    {
		if(value == 'OK'){
            this.updateStatus(InstanceStatus.Ok);

        }else if(value == "DISCONNECTED"){
            this.updateStatus(InstanceStatus.Disconnected);

        }else if(value == "NetworkIssue"){
            this.updateStatus(InstanceStatus.NetworkIssue);

        }
	}
    //--------------------------------------------------------------------------
	// Function that simply updates the feedback status of the buttons 
	//--------------------------------------------------------------------------
	feedChecker() 
    {
        this.checkFeedbacks('Time_Left');
        this.checkFeedbacks('switcher_status');
		this.checkFeedbacks('autofill_status');
		this.checkFeedbacks('autocg_status');
        this.checkFeedbacks('loop_status');
		this.checkFeedbacks('ExactTime_status');
		this.checkFeedbacks('AlwaysPrepare_status');
	}
    //--------------------------------------------------------------------------
    // Initialize the remote command class
	//--------------------------------------------------------------------------
    init_tcp() 
    {
        this.XPlayoutTCPManager = new XPlayOutTcp(this.config.host, this.config.port,this.updateStatusFromoutside.bind(this));
    }
    //--------------------------------------------------------------------------
    // When config are updated do this
    //--------------------------------------------------------------------------
    async configUpdated(config) 
    {
		console.log("configUpdated")
        this.config = config;
        if (this.config.host) {
            await this.init_tcp();
            await this.checkConnectionStatus(config)
            this.setVariableDefinitions([]);
        } else {
            this.updateStatus(InstanceStatus.BadConfig);
        }
    }
    //--------------------------------------------------------------------------
    // Clean-up
	//--------------------------------------------------------------------------
    async destroy()
     {
        this.XPlayoutTCPManager.destroy();
        clearInterval(this.createClock)
        clearInterval(this.feedClock)
        this.config = null;
        this.updateStatus(InstanceStatus.Disconnected);  
    }
	//--------------------------------------------------------------------------
    getConfigFields() 
    {
        return ConfigFields;
    }
    //--------------------------------------------------------------------------
}

runEntrypoint(XPLAYOUT, []);