/*jslint node:true*/
/*eslint-env browser*/
"use strict";

function main() { // eslint-disable-line no-unused-vars 
	var anchors = document.querySelectorAll('a'), i = 1, j = 0, hrefs = [], innerTagText = [], ul, li, a, menu;
	
	for (i; i < anchors.length - 1; i += 1) {
		hrefs[i] = anchors[i].getAttribute('href');
		innerTagText[i] = anchors[i].text;
	}
	
	hrefs.shift();
	innerTagText.shift();
	
	menu = document.getElementById('smallNavArea');
	ul = document.createElement('UL');
	
	for (j; j < hrefs.length; j += 1) {
		li = document.createElement('LI');
		a = document.createElement('A');
		
		a.setAttribute('href', hrefs[j]);
		a.innerHTML = innerTagText[j];
		
		menu.appendChild(ul).appendChild(li).appendChild(a);
	}
}

/*


*/