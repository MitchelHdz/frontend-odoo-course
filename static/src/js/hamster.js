odoo.define('academy.hamster', function(require){
	'use strict';

	const Animal = require('academy.animal');

	let DanceMixin = {
		dance: function(){
			console.log('Dancing...');
		}
	};

	let Hamster = Animal.extend(DanceMixin, {
		sleep: function(){
			console.log('Sleeping...');
		}
	});

	let hamster = new Hamster();
	hamster.dance();
	hamster.sleep();
});