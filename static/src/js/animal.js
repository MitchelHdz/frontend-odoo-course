odoo.define('academy.animal', function(require) {
	'use strict';
	
	let message = 'Hola prro';
	console.log(message);

	const Class = require('web.Class');
	let Animal = Class.extend({
		init: function(){
			this.x = 0;
			this.hunger = 0;
		},
		move: function(){
			this.x = this.x + 1;
			this.hunger = this.hunger + 1;
			console.log(this.x, this.hunger);
		},
		eat: function(){
			this.hunger = 0;
			console.log(this.x, this.hunger);
		}
	});

	let animal = new Animal();
	animal.move();
	animal.eat();

	return Animal;
});
