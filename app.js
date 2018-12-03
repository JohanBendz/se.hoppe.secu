'use strict';

const Homey = require('homey');

class hoppeSecuApp extends Homey.App {
	
	onInit() {
		this.log('${Homey.manifest.id} is running...');
	}
	
}

module.exports = hoppeSecuApp;