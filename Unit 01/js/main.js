/*jslint node: true*/
"use strict";
var name = window.prompt("Please enter your name:"), date = new Date(), day = date.getDate(), month = date.getMonth() + 1, year = date.getFullYear();
document.getElementById("title").innerHTML = "Joe's Bed and Breakfast";
document.getElementById("slogan").innerHTML = "Home is where you make it!";
document.getElementById("name").innerHTML = "Hello " + name + ", welcome home!";
document.getElementById("date").innerHTML = "The current date is: " + month + "/" + day + "/" + year;



