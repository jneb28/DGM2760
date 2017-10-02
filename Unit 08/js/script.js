/*jslint node:true*/

'use strict';
				//object
var question = {
						//properties
	answer1: 'mvemjsun',
	answer2: 'vmemjsun',
	answer3: 'mvmejsun',
	answer4: 'mvemjnus',
	correctAnswer: 1,
	
								//methods
	showQuestion: function () {
		document.getElementById('question').innerHTML = 'Which is the correct order of the planets in our solar system (start closest to the Sun)?';
		document.getElementById('question').style.color = 'blue';
	},
	
	checkAnswer: function (x) {
		if (x === 1) {
			console.log('correct');
			document.getElementById('answer').innerHTML = 'Correct';
			document.getElementById('answer').style.color = 'green';
		} else {
			console.log('incorrect');
			document.getElementById('answer').innerHTML = 'Incorrect';
			document.getElementById('answer').style.color = 'red';
		}
	}
};

/*
	window.alert('That is the correct answer!');
	window.alert('That is incorrect!');
*/