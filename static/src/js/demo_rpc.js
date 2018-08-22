odoo.define('academy.demo_rpc', function(require){
	'use strict';

	const core = require('web.core'),
		Widget = require('web.Widget'),
		rpc = require('web.rpc');
	require('web.dom_ready');

	let RpcButton = Widget.extend({
		events: {
			'click .rpc-button': 'onClick'
		},
		init: function(parent, options){
			this._super.apply(this, arguments);
			this.options = _.extend(options || {}, {});
		},
		onClick: function(event){
			console.log('Clicked');
			rpc.query({
				model: 'academy.teachers',
				method: 'search_read',
				args: [[['id','=', this.$el.data('teacher-id')]], ['biography']]
			}).then(function(res){
				if(res.length){
					console.log(res);
					$('.biography').html(res[0].biography);
				}
			});
		}
	});

	if(!$('.rpc-container').length){
		return $.Deferred().reject('DOM does not contain any .rpc-container element')
	}

	$('.rpc-container').each(function(index) {
		let $elem = $(this);
		let button = new RpcButton(null, $elem.data());
		button.attachTo($elem);
	});

	return RpcButton;
});