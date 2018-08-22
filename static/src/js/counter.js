odoo.define('academy.counter', function(require){
	'use strict';

	let Widget = require('web.Widget');
	let core = require('web.core');
	require('web.dom_ready');

	let Counter = Widget.extend({
		events: {
			'click button': '_onClick'
		},
		init: function(parent, value){
			this._super(parent);
			this.count = (value) ? value:0;
		},
		_onClick: function(){
			this.count++;
			this.$('.val').text(this.count);
		},
		start: function(){
			return this._super.apply(this, arguments);
		}
	});

	let counter_list = [];
	$('.counter').each(function(idx){
		let counter = new Counter();
		counter.setElement($(this)).start();
	});
});