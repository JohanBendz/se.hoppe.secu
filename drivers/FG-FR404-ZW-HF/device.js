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
		this.registerCapability('alarm_contact', 'NOTIFICATION');
		this.registerCapability('alarm_generic', 'NOTIFICATION');
		this.registerCapability('measure_battery', 'BATTERY');
		
		// register report listeners
		this.registerReportListener('SWITCH_BINARY', 'SWITCH_BINARY_REPORT', ( rawReport, parsedReport ) => {
		     console.log('registerReportListener', rawReport, parsedReport);
		});
		
		this.registerReportListener('NOTIFICATION', 'NOTIFICATION_REPORT', ( rawReport, parsedReport ) => {
		     console.log('registerReportListener', rawReport, parsedReport);
		});
		
	}
}
module.exports = HoppeSecuDoorWindowSensor;
