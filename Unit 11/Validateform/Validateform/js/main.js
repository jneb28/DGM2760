/*jslint node:true*/
/*eslint-env browser*/
'use strict';

function checkForm() { // eslint-disable-line no-unused-vars
	var namePass, phonePass, payMethodPass, creditCardPass, vehiclePass, finalPass, i = 0,
		name = document.forms.myForm.fullName.value,
		phone = document.forms.myForm.phoneNumber.value,
		payMethod = document.getElementsByName('payMethod'),
		creditCard = document.forms.myForm.ccNumber.value,
		vehicle = document.forms.myForm.vehicle.selectedIndex;
	
	// validate name
	if (name === null || name === '') {
		document.getElementById('fullName').className = 'error';
		namePass = false;
	} else {
		document.getElementById('fullName').className = 'normal';
		namePass = true;
	}
	
	// validate phone
	phone = phone.replace(/-/g, '');
	if (phone.length < 10) {
		document.getElementById('phoneNumber').className = 'error';
		phonePass = false;
	} else {
		document.getElementById('phoneNumber').className = 'normal';
		phonePass = true;
	}
	
	// validate payment method
	for (i; i < payMethod.length - 1; i += 1) {
		if (payMethod[i].checked) {
			document.getElementById('payMethod').className = 'normal';
			payMethodPass = true;
			break;
		} else {
			document.getElementById('payMethod').className = 'error';
			payMethodPass = false;
		}
	}
	
	// validate credit card
	creditCard = creditCard.replace(/ /g, '');
	if (creditCard.length === 15) {
		document.getElementById('ccNumber').className = 'normal';
		creditCardPass = true;
	} else {
		document.getElementById('ccNumber').className = 'error';
		creditCardPass = false;
	}
	
	// validate vehicle
	if (vehicle === 0) { // 0 === 'Please Select', 1 === 'Van', ...
        document.getElementById('vehicle').className = 'error';
		vehiclePass = false;
	} else {
		document.getElementById('vehicle').className = 'normal';
		vehiclePass = true;
	}
	
	// validate finalPass
	if (namePass === true && phonePass === true && payMethodPass === true && creditCardPass === true && vehiclePass === true) {
		document.getElementById('formProblems').className = 'hiddenErrorMsg';
		finalPass = true;
	} else {
		document.getElementById('formProblems').className = 'showErrorMsg';
		finalPass = false;
	}
	
	return finalPass;
}