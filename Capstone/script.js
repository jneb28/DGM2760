/*jslint node:true*/
/*eslint-env browser*/
/*global google*/
"use strict";


//LOAD JSON DATA
var xhr, venueInfo;
xhr = new XMLHttpRequest();
xhr.open('GET', 'main.json', true);
xhr.responseType = 'text';
xhr.send();

//TEST JSON DATA
xhr.onload = function () {
	if (xhr.status === 200) {
		venueInfo = JSON.parse(xhr.responseText);
		window.console.log(venueInfo);
		display(7);
	}
};

//DISPLAY JSON
function display(x) {
	window.console.log(x);
	document.getElementById("venueName").innerHTML = venueInfo[x].name;
	document.getElementById("address").innerHTML = venueInfo[x].address;
	document.getElementById("phone").innerHTML = venueInfo[x].phone;
	document.getElementById("website").innerHTML = venueInfo[x].website;
	document.getElementById("photo").src = venueInfo[x].photo;
}


//LOAD MAP
var map, infoWindow, velourMarker, velourCoords, gezzoMarker, gezzoCoords, undergroundMarker, undergroundCoords, abgMarker, abgCoords, stateMarker, stateCoords, depotMarker, depotCoords, kilbyMarker, kilbyCoords;
function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: {lat: 40.296818, lng: -111.694048},
		zoom: 12,
		styles:
			[
				{
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#212121"
						}
					]
				},
				{
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#757575"
						}
					]
				},
				{
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"color": "#212121"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#757575"
						}
					]
				},
				{
					"featureType": "administrative.country",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#9e9e9e"
						}
					]
				},
				{
					"featureType": "administrative.locality",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#bdbdbd"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#757575"
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#181818"
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#616161"
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"color": "#1b1b1b"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#2c2c2c"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#8a8a8a"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#373737"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#3c3c3c"
						}
					]
				},
				{
					"featureType": "road.highway.controlled_access",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#4e4e4e"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#616161"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#757575"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#3d3d3d"
						}
					]
				}
			]
	});
	infoWindow = new google.maps.InfoWindow();
	
//CREATE MAP MARKERS
	velourCoords = {lat: 40.235835, lng: -111.659191};
	gezzoCoords = {lat: 40.240468, lng: -111.661926};
	undergroundCoords = {lat: 40.234823, lng: -111.659164};
	abgCoords = {lat: 40.234302, lng: -111.661922};
	stateCoords = {lat: 40.755490, lng: -111.888510};
	depotCoords = {lat: 40.769863, lng: -111.903051};
	kilbyCoords = {lat: 40.752887, lng: -111.901094};
	velourMarker = new google.maps.Marker({
		position: velourCoords,
		map: map,
		title: "The Velour"
	});
	velourMarker.addListener('click', function () {
		display(0);
	});
	
	gezzoMarker = new google.maps.Marker({
		position: gezzoCoords,
		map: map,
		title: "Gezzo Hall"
	});
	gezzoMarker.addListener('click', function () {
		display(1);
	});
	
	undergroundMarker = new google.maps.Marker({
		position: undergroundCoords,
		map: map,
		title: "The Underground Social Hall"
	});
	undergroundMarker.addListener('click', function () {
		display(2);
	});
	
	abgMarker = new google.maps.Marker({
		position: abgCoords,
		map: map,
		title: "ABG's Libation Emporium"
	});
	abgMarker.addListener('click', function () {
		display(3);
	});
	
	stateMarker = new google.maps.Marker({
		position: stateCoords,
		map: map,
		title: "The State Room"
	});
	stateMarker.addListener('click', function () {
		display(4);
	});
	
	depotMarker = new google.maps.Marker({
		position: depotCoords,
		map: map,
		title: "The Depot"
	});
	depotMarker.addListener('click', function () {
		display(5);
	});
	
	kilbyMarker = new google.maps.Marker({
		position: kilbyCoords,
		map: map,
		title: "Kilby Court"
	});
	kilbyMarker.addListener('click', function () {
		display(6);
	});
	
//GEOLOCATION
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			var pos = {lat: position.coords.latitude, lng: position.coords.longitude};
			infoWindow.setPosition(pos);
			infoWindow.setContent("<div id='infoWindow'>You are here.</div>");
			infoWindow.open(map);
			map.setCenter(pos);
		});
	} else {
		document.getElementById("map").innerHTML = "Your browser does not support geolocation . . .";
	}
}
//DISPLAY MAP
document.onLoad = initMap();