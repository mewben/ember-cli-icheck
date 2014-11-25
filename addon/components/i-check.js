import Ember from 'ember';

export default Ember.Checkbox.extend({

	_icheck: null, // iCheck instance

	setup: function() {
		var that = this;

		Ember.assert("select2 has to exist on Ember.$.fn.iCheck", Ember.$.fn.iCheck);

		var icheck = this.$().iCheck({
			checkboxClass: 'icheckbox_square-blue',
			radioClass: 'iradio_square-blue',
			increaseArea: '20%'
		});

		icheck.on('ifToggled', function(ev) {
			that.set('checked', ev.target.checked);
		});

		this.set('_icheck', icheck);

	}.on('didInsertElement'),

	_checkedChanged: function() {
		var checked = this.get('checked') ? 'check' : 'uncheck';
		this.get('_icheck').iCheck(checked);
	}.observes('checked'),

	teardown: function() {

		if (this._icheck) {
			this.$().iCheck('destroy');
		}

		this.removeObserver('checked', this._checkedChanged);
	}.on('willDestroyElement')
});