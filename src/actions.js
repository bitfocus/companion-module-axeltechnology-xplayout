
function getActionDefinitions(self) {

	return {

		PLAY: {
			name: 'Play',
			callback: async () => {

				if (self.XPlayoutTCPManager !== undefined) {
					await self.XPlayoutTCPManager.PLAY();
				}
			}
		},
		STOP: {
			name: 'Stop',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {
					await self.XPlayoutTCPManager.STOP();
				}
			}
		},
		PAUSE: {
			name: 'Pause',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {
					await self.XPlayoutTCPManager.PAUSE();
				}
			}
		},
		JUMPIFNOV: {
			name: 'Jump If No V',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {
					await self.XPlayoutTCPManager.JUMPIFNOV();
				}
			}
		},
		JUMPIFLINE: {
			name: 'Jump If Line',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {
					await self.XPlayoutTCPManager.JUMPIFLINE();
				}
			}
		},
		JUMPANDREPEAT: {
			name: 'Jump And Repeat',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {
					await self.XPlayoutTCPManager.JUMPANDREPEAT();
				}
			}
		},
		JUMPTOLINE: {
			name: 'Jump To Line',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {
					await self.XPlayoutTCPManager.JUMPTOLINE();
				}
			}
		},
		JUMP: {
			name: 'Jump',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {
					await self.XPlayoutTCPManager.JUMP();
				}
			}
		},
		BLACK: {
			name: 'Black',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {
					await self.XPlayoutTCPManager.BLACK();
				}
			}
		},
		SWITCHER: {
			name: 'Switcher On',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {

					if(self.XPlay_Status.Switcher !='1'){
						await self.XPlayoutTCPManager.SWITCHERON();
					}else{
						await self.XPlayoutTCPManager.SWITCHEROFF();
					}
				}
			}
		},
		AUTOFILL: {
			name: 'Auto Fill On',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {

					if(self.XPlay_Status.AutoFill !='1'){
						await self.XPlayoutTCPManager.AUTOFILLON();
					}else{
						await self.XPlayoutTCPManager.AUTOFILLOFF();
					}
				}
			}
		},
		AUTOCG: {
			name: 'Auto CG On',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {

					if(self.XPlay_Status.AutoCG !='1'){
						await self.XPlayoutTCPManager.AUTOCGON();
					}else{
						await self.XPlayoutTCPManager.AUTOCGOFF();
					}
				}
			}
		},
		LOOP: {
			name: 'Loop On',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {

					if(self.XPlay_Status.Loop !='1'){
						await self.XPlayoutTCPManager.LOOPON();
					}else{
						await self.XPlayoutTCPManager.LOOPOFF();
					}
				}
			}
		},
		EXACTTIME: {
			name: 'Exact Time On',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {

					if(self.XPlay_Status.ExactTime !='1'){
						await self.XPlayoutTCPManager.EXACTTIMEON();
					}else{
						await self.XPlayoutTCPManager.EXACTTIMEOFF();
					}
				}
			}
		},
		ALWAYSPREPARE: {
			name: 'Always Prepare On',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {

					if(self.XPlay_Status.AlwaysPrepare !='1'){
						await self.XPlayoutTCPManager.ALWAYSPREPAREON();
					}else{
						await self.XPlayoutTCPManager.ALWAYSPREPAREOFF();
					}
				}
			}
		},
		ADDITEM: {
			name: 'Add Item',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {
					await self.XPlayoutTCPManager.ADDITEM();
				}
			}
		},
		PLAYLISTLOAD: {
			name: 'Playlist Load',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {
					await self.XPlayoutTCPManager.PLAYLISTLOAD();
				}
			}
		},
		PLAYLISTSAVE: {
			name: 'Playlist Save',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {
					await self.XPlayoutTCPManager.PLAYLISTSAVE();
				}
			}
		},
		PLAYITEM: {
			name: 'Play Item',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {
					await self.XPlayoutTCPManager.PLAYITEM();
				}
			}
		},
		PLAYSPLIT: {
			name: 'Play Split',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {
					await self.XPlayoutTCPManager.PLAYSPLIT();
				}
			}
		},
		MOVEUP: {
			name: 'Move Up',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {
					await self.XPlayoutTCPManager.MOVEUP();
				}
			}
		},
		MOVEDOWN: {
			name: 'Move Down',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {
					await self.XPlayoutTCPManager.MOVEDOWN();
				}
			}
		},
		GETTHUMB: {
			name: 'Get Thumb',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {
					await self.XPlayoutTCPManager.GETTHUMB();
				}
			}
		},
		AUTO: {
			name: 'Auto',
			callback: async () => {
				if (self.XPlayoutTCPManager !== undefined) {
					await self.XPlayoutTCPManager.AUTO();
				}
			}
		},
	}

}
module.exports = {getActionDefinitions}