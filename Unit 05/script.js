/*jslint node:true*/
'use strict';

var items = ['script', 'style', 'font'], input;

document.getElementById('addToStart').addEventListener('click', function () {
	input = document.getElementById('entry').value;
	console.log(items);
	items.unshift(input);
	console.log(items);
});


document.getElementById('addToEnd').addEventListener('click', function () {
	input = document.getElementById('entry').value;
	console.log(items);
	items.push(input);
	console.log(items);
});


document.getElementById('removeFirst').addEventListener('click', function () {
	input = document.getElementById('entry').value;
	if (items.length <= 0) {
		window.alert('Nothing left to remove');
	} else {
		console.log(items);
		items.shift();
		console.log(items);
	}
});


document.getElementById('removeSecond').addEventListener('click', function () {
	input = document.getElementById('entry').value;
	if (items.length < 2) {
		window.alert('Nothing left to remove');
	} else {
		console.log(items);
		items.splice(1, 1);
		console.log(items);
	}
});


document.getElementById('removeLast').addEventListener('click', function () {
	if (items.length <= 0) {
		window.alert('Nothing left to remove');
	} else {
		console.log(items);
		items.pop();
		console.log(items);
	}
});


document.getElementById('sortInput').addEventListener('click', function () {
	if (items.length <= 0) {
		window.alert('Nothing to sort');
	} else {
		console.log(items);
		items.sort();
		console.log(items);
	}
});


document.getElementById('toLower').addEventListener('click', function () {
	var i = 0;
	if (items.length <= 0) {
		window.alert('Nothing to lowercase');
	} else {
		console.log(items);
		for (i; i < items.length; i += 1) {
			items[i] = items[i].toLowerCase();
		}
		console.log(items);
	}
});


document.getElementById('showThird').addEventListener('click', function () {
	if (items.length < 2) {
		window.alert("No third element");
	} else {
		document.getElementById('showValue').innerHTML = items[2];
	}
});


document.getElementById('showFourth').addEventListener('click', function () {
	if (items.length < 4) {
		window.alert('No fourth element');
	} else {
		document.getElementById('showValue').innerHTML = items[3];
	}
});


/*


*/