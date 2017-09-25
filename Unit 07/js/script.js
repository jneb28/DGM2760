/*jslint node:true*/
'use strict';
//object
var pizza = {
	//properties
	cheese: true,
	tomatoSauce: true,
	pepperoni: false,
	olive: false,
	bacon: false,
	
	//methods
	create: function () {
		var pizzaString = 'Pizza ingredients =' + '<br>' + 'Tomato Sauce: ' + pizza.tomatoSauce + '<br>' + 'Cheese: ' + pizza.cheese + '<br>' + 'Pepperoni: ' + pizza.pepperoni + '<br>' + 'Olive: ' + pizza.olive + '<br>' + 'Bacon: ' + pizza.bacon;
		document.getElementById('pizza').innerHTML = pizzaString;
	},
	reset: function () {
		pizza.pepperoni = 'false';
		pizza.olive = 'false';
		pizza.bacon = 'false';
		document.getElementById('pizza').innerHTML = '';
	}
};