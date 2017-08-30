/*jslint node: true*/
"use strict";
function windowProperties() {
	var height = window.innerHeight, width = window.innerWidth, left = window.screenX, top = window.screenY, url = window.location;
	document.getElementById("windowSize").innerHTML = "The window height is " + height + " px, and the width is " + width + " px.";
	document.getElementById("windowOffset").innerHTML = "The window x-offset is " + left + " px, and the y-offset is " + top + " px.";
	document.getElementById("pageURL").innerHTML = "The webpage address is: " + url;
}
function documentProperties() {
	var update = document.lastModified, title = document.title;
	document.getElementById("docTitle").innerHTML = "This document is titled: " + title;
	document.getElementById("docUpdate").innerHTML = "This document was last modified: " + update;
}
windowProperties();
documentProperties();