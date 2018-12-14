'use strict';
const Homey = require('homey');
const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class HoppeSecuDoorWindowSensor extends ZwaveDevice {
	
	async onMeshInit() {
		
		// enable debugging
		this.enableDebug();
		
		// print the node's info to the console
		this.printNode();

		// register device capabilities
		this.registerCapability('alarm_contact', 'BASIC');
		this.registerCapability('alarm_tamper', 'BASIC');
		this.registerCapability('alarm_battery', 'BATTERY');
		this.registerCapability('measure_battery', 'BATTERY');
		
		// register a report listener
		this.registerReportListener('SWITCH_BINARY', 'SWITCH_BINARY_REPORT', ( rawReport, parsedReport ) => {
		     console.log('registerReportListener', rawReport, parsedReport);
		});
	}
}
module.exports = HoppeSecuDoorWindowSensor;
