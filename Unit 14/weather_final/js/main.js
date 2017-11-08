/*jslint node:true*/
/*eslint-env browser*/
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj; //conditions
var fObj; //forecast

function loadWeather() {
	var zip, conditionPath, forecastPath;
	zip = document.getElementById('zip').value;
	
	if (zip === '') {
		zip = 84058;
	}
	conditionPath = 'http://api.wunderground.com/api/f40ecc955f16ede5/conditions/q/' + zip + '.json'; // gathers weather conditions based on zipcode
	forecastPath = 'http://api.wunderground.com/api/f40ecc955f16ede5/forecast/q/' + zip + '.json'; // gathers weather forecast based on zipcode
	
	// GET THE CONDITIONS
	weatherConditions.open('GET', conditionPath, true);
	weatherConditions.responseType = 'text';
	weatherConditions.send(null);
	
	// GET THE FORECARST
	weatherForecast.open('GET', forecastPath, true);
	weatherForecast.responseType = 'text';
	weatherForecast.send();
}





weatherConditions.onload = function () {
    if (weatherConditions.status === 200) {
        cObj = JSON.parse(weatherConditions.responseText);
        window.console.log(cObj);
		
		// weather conditions
		document.getElementById('location').innerHTML = cObj.current_observation.display_location.full; // ie. Orem, UT
		document.getElementById('weather').innerHTML = cObj.current_observation.weather; // ie. Clear
		document.getElementById('temperature').innerHTML = cObj.current_observation.temp_f; // ie. 32 + '°'
		
    } //end if
}; //end function





weatherForecast.onload = function () {
	
	if (weatherForecast.status === 200) {
		fObj = JSON.parse(weatherForecast.responseText);
		window.console.log(fObj);
		
		
		var imagePath;
		
		// weather forecast
		document.getElementById('desc').innerHTML = fObj.forecast.txt_forecast.forecastday["0"].fcttext; // ie Clear. Lows overnight in the low 20s.
		
		// future forecast day 1
		document.getElementById('r1c1').innerHTML = fObj.forecast.simpleforecast.forecastday[1].date.weekday; // day of week
		imagePath = fObj.forecast.simpleforecast.forecastday[1].icon_url; // get image path
		document.getElementById('r1c2').src = imagePath; // set image path
		document.getElementById('r1c3').innerHTML = fObj.forecast.simpleforecast.forecastday[1].high.fahrenheit + '°'; // high of the day
		document.getElementById('r1c4').innerHTML = fObj.forecast.simpleforecast.forecastday[1].low.fahrenheit + '°'; // low of the day
		
		// future forecast day 2
		document.getElementById('r2c1').innerHTML = fObj.forecast.simpleforecast.forecastday[2].date.weekday; // day of week
		imagePath = fObj.forecast.simpleforecast.forecastday[2].icon_url;
		document.getElementById('r2c2').src = imagePath;
		document.getElementById('r2c3').innerHTML = fObj.forecast.simpleforecast.forecastday[2].high.fahrenheit + '°'; // high of the day
		document.getElementById('r2c4').innerHTML = fObj.forecast.simpleforecast.forecastday[2].low.fahrenheit + '°'; // low of the day
		
		// future forecast day 3
		document.getElementById('r3c1').innerHTML = fObj.forecast.simpleforecast.forecastday[3].date.weekday; // day of week
		imagePath = fObj.forecast.simpleforecast.forecastday[3].icon_url;
		document.getElementById('r3c2').src = imagePath;
		document.getElementById('r3c3').innerHTML = fObj.forecast.simpleforecast.forecastday[3].high.fahrenheit + '°'; // high of the day
		document.getElementById('r3c4').innerHTML = fObj.forecast.simpleforecast.forecastday[3].low.fahrenheit + '°'; // low of the day
		
		
		
		
		
	} //end if
}; //end function

loadWeather();
