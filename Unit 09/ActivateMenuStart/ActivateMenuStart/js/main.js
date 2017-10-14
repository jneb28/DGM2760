/*jslint node:true*/
/*eslint-env browser*/
'use strict';


function stripAddress() {
	var address = document.location.href,
		strippedAddress,
		addressSplit,
		questionSplit,
		poundSplit,
		slashSplit;
	if (address.includes('p?')) {
		questionSplit = address.split('?');    //this clause could be simplified by passing regex into the split function (i.e. split at ? and /)
		addressSplit = questionSplit.shift();
		slashSplit = addressSplit.split('/');
		strippedAddress = slashSplit.pop();
	} else if (address.includes('p#')) {
		poundSplit = address.split('#');    //this clause could be simplified by passing regex into the split function (i.e. split at # and /)
		addressSplit = poundSplit.shift();
		slashSplit = addressSplit.split('/');
		strippedAddress = slashSplit.pop();
	} else if (address.includes('p#') !== true && address.includes('p?') !== true) {
		slashSplit = address.split('/');
		strippedAddress = slashSplit.pop();
	} else {
		strippedAddress = document.location.href;
	}
	window.console.log(strippedAddress);
	return strippedAddress;
}


function applyClass(address) {
	var htmlTag = document.querySelectorAll('ul#mainmenu li a'),
		i = 0;
	for (i; i < htmlTag.length; i += 1) {
		if (address === 'index.php') {
			htmlTag[0].className = 'active';
		} else if (address === 'drill.php') {
			htmlTag[0].parentNode.className = '';
			htmlTag[1].className = 'parent';
			htmlTag[2].className = 'active';
		} else if (address === 'hammer.php') {
			htmlTag[0].parentNode.className = '';
			htmlTag[1].className = 'parent';
			htmlTag[3].className = 'active';
		} else if (address === 'location.php') {
			htmlTag[0].parentNode.className = '';
			htmlTag[4].className = 'active';
		} else {
			window.console.log('address not found');
		}
	}
}


function main() {
	applyClass(stripAddress());
}

main();


/*


*/