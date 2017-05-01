# ember-cli-icheck

ember-cli addon component for [iCheck](http://fronteed.com/iCheck/)

## Update: Not maintained anymore.

## Installation

* `ember install ember-cli-icheck`

## Usage

* In any `.hbs` file,
	- `{{i-check checked=variable}}`
	- `{{i-check type="radio" checked=variable}}`
	- `{{i-check type="checkbox" checked=variable checkboxClass='icheckbox_whatever-style'}}`
	- `{{i-check type="radio" checked=variable radioClass='iradio_whatever-style' areaIncrease="30%"}}`

* Defaults:
	- checkboxClass: 'icheckbox_square-blue'
	- radioClass: 'iradio_square-blue'
	- increaseArea: '20%'

## Configuration

The default configuration does only import square theme with blue tone, if you want to use a diferent color or theme you can import the files on your own or just configure the plugin to do so.
The configuration should be done in your `config/enviroment.js` file, for example if you want to use flat green theme you should add this:
```
module.exports = function(environment) {
  var ENV = {
    // ... 
    emberCliIcheck: {
      colors: ['green'],
      skins: ['flat']
    }
  };
}
```

