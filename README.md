# ember-cli-icheck

ember-cli addon component for [iCheck](http://fronteed.com/iCheck/)

## Installation

* `npm install ember-cli-icheck --save-dev`
* `ember g ember-cli-icheck`

## Usage

* In any `.hbs` file,
	- `{{i-check checked=variable}}`
	- `{{i-check type="radio" checked=variable}}`
	- `{{i-check type="checkbox" checked=variable checkboxClass='icheckbox_whatever-style'}}`
	- `{{i-check type="radio" checked=variable radioClass='iradio_whatever-style' areaIncrease="30%"}}`

* currently you can override the following defaults in handlebars
	- checkboxClass
	- radioClass
	- areaIncrease
