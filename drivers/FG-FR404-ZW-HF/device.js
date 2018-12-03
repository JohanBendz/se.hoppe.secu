'use strict';
const Homey = require('homey');
const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class HoppeSecuDoorWindowSensor extends ZwaveDevice {
	
	async onMeshInit() {
		
		// enable debugging
		this.enableDebug();
		
		// print the node's info to the console
		this.printNode();

		// register the `measure_battery` capability with COMMAND_CLASS_BATTERY and with the default system capability handler
 		this.registerCapability('measure_battery', 'BATTERY');
	
		this.registerCapability('alarm_contact', 'SENSOR_BINARY', {
			getOpts: {
				getOnOnline: true, // use only for battery devices
			}
		});
	}
}
module.exports = HoppeSecuDoorWindowSensor;