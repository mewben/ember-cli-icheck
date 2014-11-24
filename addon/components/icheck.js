import Ember from 'ember';

export default Ember.Component.extend({

	_icheck: null,

	setup: function() {
		console.log('Setup icheck here');
	}.on('didInsertElement'),

	teardown: function() {
		this.get('_icheck').destroy();
	}.on('willDestroyElement')
});