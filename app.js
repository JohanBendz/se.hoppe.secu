'use strict';

const Homey = require('homey');

class hoppeSecuApp extends Homey.App {
	
	onInit() {
		this.log('Hoppe SecuSignal app is running...');
	}
	
}

module.exports = hoppeSecuApp;
