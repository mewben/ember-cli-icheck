'use strict';

module.exports = {
  	name: 'ember-cli-icheck',

  	included: function(app) {
  		this._super.included(app);

  		app.import(app.bowerDirectory + '/iCheck/icheck.min.js');
  		app.import(app.bowerDirectory + '/iCheck/skins/square/blue.css');
  		app.import(app.bowerDirectory + '/iCheck/skins/square/blue.png', { destDir: 'assets' });
  		app.import(app.bowerDirectory + '/iCheck/skins/square/blue@2x.png', { destDir: 'assets' });
  	}
};
