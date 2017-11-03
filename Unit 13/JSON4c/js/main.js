/*jslint node:true*/
/*eslint-env browser*/
'use strict';

var hotelInfo, details, xhr; // eslint-disable-line no-unused-vars
xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();

function display(value) { // eslint-disable-line no-unused-vars
	var i;
	window.console.log(value);
	document.getElementById('roomName').innerHTML = hotelInfo[value].name;
	document.getElementById('desc').innerHTML = hotelInfo[value].description;
	document.getElementById('photo').src = hotelInfo[value].photo;
	
	document.getElementById('weekday').innerHTML = hotelInfo[value].cost.weekday;
	document.getElementById('weekend').innerHTML = hotelInfo[value].cost.weekend;
	
	details = '';
	for (i = 0; i < hotelInfo[value].details.length; i += 1) {
		window.console.log(hotelInfo[value].details[i]);
		details += '<p>' + hotelInfo[value].details[i] + '</p>';
	}
	
	document.getElementById('details').innerHTML = details;
}

xhr.onload = function () {
    if (xhr.status === 200) {
        hotelInfo = JSON.parse(xhr.responseText);
        window.console.log(hotelInfo);
        display(0);
    }
};

/*
    // eslint-disable-line no-unused-vars
	
*/