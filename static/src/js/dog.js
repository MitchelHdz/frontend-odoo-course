odoo.define('academy.dog', function(require){
	'use strict';

	const Animal = require('academy.animal');
	
	let Dog = Animal.extend({
		move: function(){
			this.bark();
			this._super.apply(this, arguments);
		},
		bark: function(){
			console.log('woof');
		}
	});
	
	let dog = new Dog();
	dog.move();

	return Dog;
});
