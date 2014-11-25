import Ember from 'ember';

export default Ember.TextField.extend({
	type: 'checkbox', // default, can be overriden type="radio"

	_icheck: null, // iCheck instance

	setup: function() {
		var icheck = this.$().iCheck({
			checkboxClass: 'icheckbox_square-blue',
			radioClass: 'iradio_square-blue'
		});

		this.set('_icheck', iCheck);
	}.on('didInsertElement'),

	teardown: function() {
		this.get('_icheck').destroy();
	}.on('willDestroyElement')
});