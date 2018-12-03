'use strict';

const Homey = require('homey');

class hoppeSecuApp extends Homey.App {
	
	onInit() {
		this.log('Hoppe Secu app is running...');
	}
	
}

module.exports = hoppeSecuApp;