const { Regex } =require ( '@companion-module/base')

const ConfigFields = [
	{
		type: 'static-text',
		id: 'info',
		label: 'Information',
		width: 12,
		value: `
				<div class="alert alert-danger">
					<h3>IMPORTANT MESSAGE</h3>
					
				</div>
			`,
	},
	{
		type: 'textinput',
		id: 'host',
		label: 'Target IP',
		width: 8,
		regex: Regex.IP,
	},
	{
		type: 'textinput',
		id: 'port',
		label: 'Target Port',
		width: 4,
		default: 5000,
		regex: Regex.PORT,
	},
]
module.exports = {ConfigFields};