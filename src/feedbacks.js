const { combineRgb } = require( '@companion-module/base')

function getFeedbackDefinitions(self){

    return{
		switcher_status: {
			name: 'Switcher Status (on/off)',
			type: 'advanced',
			label: 'Channel State',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [
				{
					id: 'off_color',
					type: 'colorpicker',
					label: 'Off Color',
					default: combineRgb(0, 0, 0),
				},
				{
					id: 'on_color',
					type: 'colorpicker',
					label: 'On Color',
					default: combineRgb(255, 0, 0),
				}
			],
			callback: (feedback) => {

                if(self.XPlay_Status.Switcher !='1'){
                    return {
						bgcolor: feedback.options.off_color,
					};
                }else{
                    return {
						bgcolor: feedback.options.on_color,
					};
                }

			},
		},
        autofill_status: {
			name: 'Autofill Status (on/off)',
			type: 'advanced',
			label: 'Channel State',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [
				{
					id: 'off_color',
					type: 'colorpicker',
					label: 'Off Color',
					default: combineRgb(0, 0, 0),
				},
				{
					id: 'on_color',
					type: 'colorpicker',
					label: 'On Color',
					default: combineRgb(255, 0, 0),
				}
			],
			callback: (feedback) => {

                if(self.XPlay_Status.AutoFill !='1'){
                    return {
						bgcolor: feedback.options.off_color,
					};
                }else{
                    return {
						bgcolor: feedback.options.on_color,
					};
                }

			},
		},
        autocg_status: {
			name: 'AutoCG Status (on/off)',
			type: 'advanced',
			label: 'Channel State',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [
				{
					id: 'off_color',
					type: 'colorpicker',
					label: 'Off Color',
					default: combineRgb(0, 0, 0),
				},
				{
					id: 'on_color',
					type: 'colorpicker',
					label: 'On Color',
					default: combineRgb(255, 0, 0),
				}
			],
			callback: (feedback) => {

                if(self.XPlay_Status.AutoCG !='1'){
                    return {
						bgcolor: feedback.options.off_color,
					};
                }else{
                    return {
						bgcolor: feedback.options.on_color,
					};
                }

			},
		},
        loop_status: {
			name: 'Loop Status (on/off)',
			type: 'advanced',
			label: 'Channel State',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [
				{
					id: 'off_color',
					type: 'colorpicker',
					label: 'Off Color',
					default: combineRgb(0, 0, 0),
				},
				{
					id: 'on_color',
					type: 'colorpicker',
					label: 'On Color',
					default: combineRgb(255, 0, 0),
				}
			],
			callback: (feedback) => {

                if(self.XPlay_Status.Loop !='1'){
                    return {
						bgcolor: feedback.options.off_color,
					};
                }else{
                    return {
						bgcolor: feedback.options.on_color,
					};
                }

			},
		},
        ExactTime_status: {
			name: 'Exact Time Status (on/off)',
			type: 'advanced',
			label: 'Channel State',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [
				{
					id: 'off_color',
					type: 'colorpicker',
					label: 'Off Color',
					default: combineRgb(0, 0, 0),
				},
				{
					id: 'on_color',
					type: 'colorpicker',
					label: 'On Color',
					default: combineRgb(255, 0, 0),
				}
			],
			callback: (feedback) => {

                if(self.XPlay_Status.ExactTime !='1'){
                    return {
						bgcolor: feedback.options.off_color,
					};
                }else{
                    return {
						bgcolor: feedback.options.on_color,
					};
                }

			},
		},
        AlwaysPrepare_status: {
			name: 'Always Prepare Status (on/off)',
			type: 'advanced',
			label: 'Channel State',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [
				{
					id: 'off_color',
					type: 'colorpicker',
					label: 'Off Color',
					default: combineRgb(0, 0, 0),
				},
				{
					id: 'on_color',
					type: 'colorpicker',
					label: 'On Color',
					default: combineRgb(255, 0, 0),
				}
			],
			callback: (feedback) => {

                if(self.XPlay_Status.AlwaysPrepare !='1'){
                    return {
						bgcolor: feedback.options.off_color,
					};
                }else{
                    return {
						bgcolor: feedback.options.on_color,
					};
                }

			},
		},
        Time_Left: {
			name: 'When Time left is < than the selected time, blink',
			type: 'advanced',
			label: 'Channel State',
			defaultStyle: {
                num:10,
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [
                {
					id: 'num',
					type: 'number',
					label: 'Seconds left to blink',
					default: 10,
				},
				{
					id: 'off_color',
					type: 'colorpicker',
					label: 'Off Color',
					default: combineRgb(0, 0, 0),
				},
				{
					id: 'on_color',
					type: 'colorpicker',
					label: 'On Color',
					default: combineRgb(255, 0, 0),
				}
			],
			callback: (feedback) => {

                if(self.remainingSeconds <= feedback.options.num){
                    
                    if(self.blinking){
                        self.blinking = false;
                        return {
                            bgcolor: feedback.options.off_color,
                            text: self.XPlay_Time_Info.remain
                        };
                    }else{
                        self.blinking = true;
                        return {
                            bgcolor: feedback.options.on_color,
                            text: self.XPlay_Time_Info.remain
                        };
                    }

                }
                return {
                    text: self.XPlay_Time_Info.remain
                };

			},
		}
    
    }
		
}

module.exports ={getFeedbackDefinitions}