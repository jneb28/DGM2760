/*jslint node:true*/
"use strict";

var randomNumber = Math.floor(Math.random() * 15),  numOfTurns = 0, badge = document.createElement("IMG"), badgePath;
console.log(randomNumber);
console.log(badge);


function badgeGenerator(numOfTurns) {
	switch (numOfTurns) {
	case 1:
	case 2:
	case 3:
		badgePath = "img/first.png";
		break;
	case 4:
	case 5:
	case 6:
		badgePath = "img/second.png";
		break;
	case 7:
	case 8:
	case 9:
		badgePath = "img/third.png";
		break;
	default:
		badgePath = "img/good.png";
	}
	document.getElementById("imgWrapper").appendChild(badge);
	badge.setAttribute("src", badgePath);
	document.getElementById("turns").innerHTML = "Number of turns: " + numOfTurns;
}


function hiLow() {
	var guessNum = document.getElementById("inputField").value, gameOver = false;
	do {
		if (Number(guessNum) === randomNumber) {
			window.alert("You guessed the right number!");
			numOfTurns += 1;
			gameOver = true;
		} else if (guessNum > randomNumber) {
			window.alert("Your guess is too high . . .");
			numOfTurns += 1;
			return;
		} else if (guessNum < randomNumber) {
			window.alert("Your guess is too low . . .");
			numOfTurns += 1;
			return;
		} else if (guessNum < 0 || guessNum > 15 || guessNum === 0) {
			window.alert("Out of bounds . . .");
			return;
		} else {
			window.alert("Unknown input . . .");
			return;
		}
		
	} while (gameOver === false);
	return badgeGenerator(numOfTurns);
}


/*
*/