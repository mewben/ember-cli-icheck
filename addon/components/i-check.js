import Ember from 'ember';

export default Ember.Checkbox.extend({

	_icheck: null, // iCheck instance

	setup: function() {
		var that = this;

		Ember.assert("iCheck has to exist on Ember.$.fn.iCheck", !!Ember.$.fn.iCheck);

		var icheck = this.$().iCheck({
			// base class added to customized checkboxes
			checkboxClass: this.getWithDefault('checkboxClass', 'icheckbox_square-blue'),

			// base class added to customized radio buttons
			radioClass: this.getWithDefault('radioClass', 'iradio_square-blue'),

			// increase clickable area by given % (negative number to decrease)
			increaseArea: this.getWithDefault('increaseArea', '20%'),

			// class added on checked state (input.checked = true)
			checkedClass: this.getWithDefault('checkedClass', 'checked'),

			// if not empty, used instead of 'checkedClass' option (input type specific)
			checkedCheckboxClass: this.getWithDefault('checkedCheckboxClass', ''),
			checkedRadioClass: this.getWithDefault('checkedRadioClass', ''),

			// if not empty, added as class name on unchecked state (input.checked = false)
			uncheckedClass: this.getWithDefault('uncheckedClass', ''),

			// if not empty, used instead of 'uncheckedClass' option (input type specific)
			uncheckedCheckboxClass: this.getWithDefault('uncheckedCheckboxClass', ''),
			uncheckedRadioClass: this.getWithDefault('uncheckedRadioClass', ''),

			// class added on disabled state (input.disabled = true)
			disabledClass: this.getWithDefault('disabledClass', 'disabled'),

			// if not empty, used instead of 'disabledClass' option (input type specific)
			disabledCheckboxClass: this.getWithDefault('disabledCheckboxClass', ''),
			disabledRadioClass: this.getWithDefault('disabledRadioClass', ''),

			// if not empty, added as class name on enabled state (input.disabled = false)
			enabledClass: this.getWithDefault('enabledClass', ''),

			// if not empty, used instead of 'enabledClass' option (input type specific)
			enabledCheckboxClass: this.getWithDefault('enabledCheckboxClass', ''),
			enabledRadioClass: this.getWithDefault('enabledRadioClass', ''),

			// class added on indeterminate state (input.indeterminate = true)
			indeterminateClass: this.getWithDefault('indeterminateClass', 'indeterminate'),

			// if not empty, used instead of 'indeterminateClass' option (input type specific)
			indeterminateCheckboxClass: this.getWithDefault('indeterminateCheckboxClass', ''),
			indeterminateRadioClass: this.getWithDefault('indeterminateRadioClass', ''),

			// if not empty, added as class name on determinate state (input.indeterminate = false)
			determinateClass: this.getWithDefault('determinateClass', ''),

			// if not empty, used instead of 'determinateClass' option (input type specific)
			determinateCheckboxClass: this.getWithDefault('determinateCheckboxClass', ''),
			determinateRadioClass: this.getWithDefault('determinateRadioClass', ''),

			// class added on hover state (pointer is moved onto input)
			hoverClass: this.getWithDefault('hoverClass', 'hover'),

			// class added on focus state (input has gained focus)
			focusClass: this.getWithDefault('focusClass', 'focus'),

			// class added on active state (mouse button is pressed on input)
			activeClass: this.getWithDefault('activeClass', 'active'),

			// adds hoverClass to customized input on label hover and labelHoverClass to label on input hover
			labelHover: this.getWithDefault('labelHover', true),

			// class added to label if labelHover set to true
			labelHoverClass: this.getWithDefault('labelHoverClass', 'hover'),

			// true to set 'pointer' CSS cursor over enabled inputs and 'default' over disabled
			cursor: this.getWithDefault('cursor', false),

			// set true to inherit original input's class name
			inheritClass: this.getWithDefault('inheritClass', false),

			// if set to true, input's id is prefixed with 'iCheck-' and attached
			inheritID: this.getWithDefault('inheritID', false),

			// set true to activate ARIA support
			aria: this.getWithDefault('aria', false),

			// add HTML code or text inside customized input
			insert: this.getWithDefault('insert', '')
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
