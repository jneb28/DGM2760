/*jslint node:true*/
/*eslint-env browser*/
'use strict';

function calcPowerConsumption(id, tagName) {
	var monthlyPowerConsumption = [],
		annualPowerConsumption = 0,
		dailyPowerConsumption = 0,
		i = 0,
		daysInYear = 365;

	// pull kWh values from form inputs
	monthlyPowerConsumption = document.getElementById(id).getElementsByTagName(tagName);

	// add monthly kWh values for annual
	for (i; i < monthlyPowerConsumption.length - 1; i += 1) {
		annualPowerConsumption += Number(monthlyPowerConsumption[i].value);
	}

	// divide annual power consumption by 365 to get daily power consumption
	dailyPowerConsumption = (annualPowerConsumption / daysInYear).toFixed(2);
	
	return dailyPowerConsumption;
}

function calcSolarHours() {
	var solarZone = document.forms.solarForm.zone.selectedIndex,
		hoursOfSun = 0;

	// set hours of sun according to solar zone through switch statement
	switch (solarZone) {
	case 0:
		hoursOfSun = 6;
		break;
	case 1:
		hoursOfSun = 5.5;
		break;
	case 2:
		hoursOfSun = 5;
		break;
	case 3:
		hoursOfSun = 4.5;
		break;
	case 4:
		hoursOfSun = 4;
		break;
	case 5:
		hoursOfSun = 3.5;
		break;
	default:
		hoursOfSun = 0;
		break;
	}
	
	return hoursOfSun;
}

function calcWRequirement(dailyKW, solarHours) { // eslint-disable-line no-unused-vars
	var minKW = 0,
		weatherVar = 1.25,
		actualKW = 0,
		requiredWatts = 0,
		wattConversion = 1000;
	
	// kw without weather factors
	minKW = dailyKW / solarHours;
	
	// include weather factors
	actualKW = minKW * weatherVar;
	
	// convert kw to w
	requiredWatts = (actualKW * wattConversion).toFixed(2);
	
	return requiredWatts;
}

function panelChoice() { // eslint-disable-line no-unused-vars
	var panel = document.forms.solarForm.panel.selectedIndex, // selected panel
		panels = document.forms.solarForm.panel.options, // panel options
		panelPower = panels[panel].value, // pulls value from selection
		panelName = panels[panel].text, // pulls inner text from selection
		product = [panelName, panelPower]; // combines name and power into array
	
	return product;
	
}

function calcPanelsRequired(wattRequirement, powerGenerated) {
	var panelsRequired = Math.ceil(wattRequirement / powerGenerated); // determined how many panels are required to meet watt requirement
	
	return panelsRequired;
}

function main() { // eslint-disable-line no-unused-vars
	var dailyKW = calcPowerConsumption('monthlyPower', 'input'),
		solarHours = calcSolarHours(),
		wattRequirement = calcWRequirement(dailyKW, solarHours),
		panel = panelChoice(),
		panelName = panel[0],
		panelPower = panel[1],
		panelsRequired = calcPanelsRequired(wattRequirement, panelPower),
		results = '<h2>Results</h2>' + '<p>Based on your average daily use of ' + dailyKW + ' KwH, you will need to purchase ' + panelsRequired + ' ' + panelName + ' solar panels to offset 100% of your electricity bill.</p>' + '<h2>Additional Info</h2>' + '<p>Your average daily electric consumption is ' + dailyKW + ' KwH per day.</p>' + '<p>Your average solar hours are ' + solarHours + ' hours per day.</p>' + '<p>You will need ' + wattRequirement + ' watts per hour.</p>' + '<p>The ' + panelName + ' panel you selected generates about ' + panelPower + ' watts per hour.</p>';
	
	// display results to web page
	document.getElementById('results').innerHTML = results;
}


/*

	// eslint-disable-line no-unused-vars
	
*/