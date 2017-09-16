/*jslint node:true*/
'use strict';
var button = document.getElementById('createStory');
function storyTime() {
	var nouns = document.getElementById('nouns').value.toLowerCase().split(/\s+|\n/),
		adjectives = document.getElementById('adjectives').value.toLowerCase().split(/\s+|\n/),
		verbs = document.getElementById('verbs').value.toLowerCase().split(/\s+|\n/),
		story = document.getElementById('story').innerHTML = 'There once was a ' + nouns[0] + ', a ' + nouns[1] + ', and a ' + nouns[2] + '. This wasn\'t your ordinary group because the ' + nouns[0] + ' was ' + adjectives[0] + ', the ' + nouns[1] + ' was ' + adjectives[1] + ', and the ' + nouns[2] + ' was ' + adjectives[2] + '.' + ' The ' + nouns[2] + '\'s great grandmother told all of them they either had to ' + verbs[0] + ', ' + verbs[1] + ', or ' + verbs[2] + ' around the block if they wanted a piece of her ' + adjectives[2] + ' apple cobbler. So, the ' + nouns[1] + ' chose to  ' + verbs[0] + ', the ' + nouns[0] + ' chose to ' + verbs[2] + ', and the ' + nouns[2] + ' chose to ' + verbs[1] + ' around the block. At the end of the day, they all ate a piece of ' + adjectives[2] + ' apple cobbler happily ever after.';
}
button.addEventListener('click', function () {
	storyTime();
});
