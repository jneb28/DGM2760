/*jslint node:true*/
'use strict';

document.getElementById("stringContainer").innerHTML = stringBuilder();


function randomNumberGenerator(upperLimit, lowerLimit) {
	var randomNum = Math.floor(Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit); //returns random number between specified range
	console.log(randomNum);
	return randomNum;
}


function monthDay() {
	var day = randomNumberGenerator(30, 1);
	if (day > 30 || day < 0) {
		console.log("day out of bounds . . .");
	}
	return day;
}


function monthSwitch() {
	var monthNum = randomNumberGenerator(12, 1), monthStr = "";
	switch (monthNum) {
	case 1:
		monthStr = "January";
		break;
	case 2:
		monthStr = "Febuary";
		break;
	case 3:
		monthStr = "March";
		break;
	case 4:
		monthStr = "April";
		break;
	case 5:
		monthStr = "May";
		break;
	case 6:
		monthStr = "June";
		break;
	case 7:
		monthStr = "July";
		break;
	case 8:
		monthStr = "August";
		break;
	case 9:
		monthStr = "September";
		break;
	case 10:
		monthStr = "October";
		break;
	case 11:
		monthStr = "November";
		break;
	case 12:
		monthStr = "December";
		break;
	default:
		console.log("monthNum out of bounds . . .");
		break;
	}
	return monthStr;
}


function fortuneSwitch() {
	var fortuneNum = randomNumberGenerator(5, 1), fortuneStr = "";
	switch (fortuneNum) {
	case 1:
		fortuneStr = "something very good will happen!";
		break;
	case 2:
		fortuneStr = "be extra generous!";
		break;
	case 3:
		fortuneStr = "you will recieve a sign!";
		break;
	case 4:
		fortuneStr = "you will have bad luck!";
		break;
	case 5:
		fortuneStr = "an important person will enter your life!";
		break;
	default:
		window.alert("fortuneNum out of bounds . . .");
		break;
	}
	return fortuneStr;
}


function stringBuilder() {
	var message = "On " + monthSwitch() + " " + monthDay() + ", " + fortuneSwitch();
	return message;
}


/*

*/