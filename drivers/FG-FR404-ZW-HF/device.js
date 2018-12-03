'use strict';
const Homey = require('homey');
const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class HoppeSecuDoorWindowSensor extends ZwaveDevice {
	
	async onMeshInit() {
		
		// enable debugging
		// this.enableDebug();
		
		// print the node's info to the console
		// this.printNode();

		// register device capabilities
		this.registerCapability('alarm_contact', 'NOTIFICATION');
		this.registerCapability('alarm_tamper', 'NOTIFICATION');
		this.registerCapability('alarm_battery', 'BATTERY');
		this.registerCapability('measure_battery', 'BATTERY');
	}
}
module.exports = HoppeSecuDoorWindowSensor;