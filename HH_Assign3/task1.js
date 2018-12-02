function validateInput() {
	// check if age is a number bigger than 0
	var age = registrationForm.elements.customerAge.value;
	console.log(age);

	if(isNaN(age)){
		window.alert("Invalid age");
		return false
	}

	// Check if gender is selected
	var genderIndex = registrationForm.elements.customerGender.selectedIndex;
	var genderValue = registrationForm.elements.customerGender.options[genderIndex].value;

	if(genderValue == "notSelected"){
		window.alert("Please select a gender option");
		return false;
	}

	// Check if username is between 6 and 20 characters
	var username = registrationForm.elements.username.value;
	if(username.length < 6 || username.length > 20) {
		window.alert("Username must be between 6 and 20 characters");
		return false;
	}

	// Check if password match
	var password = registrationForm.elements.password.value;
	var confirmPassword = registrationForm.elements.confirmPassword.value;

	if(password != confirmPassword) {
		window.alert("Password not match");
		return false;
	}

	// Check if selected a service
	var service = registrationForm.elements.service;
	var selectedServiceStr = "";
	for(var i = 0; i < service.length; i++) {
		if(service[i].checked) {
			console.log(service[i].value);
			switch(service[i].value) {
				case "gymAccess":
					selectedServiceStr += "Gym access, ";
					break;
				case "activities":
					selectedServiceStr += "Weekly activities, "
					break;
				case "sonaRoom":
					selectedServiceStr += "Sona room, ";
					break;
				default:
					selectedServiceStr += "Personal Trainer, ";
					break;
			}
		}
	}

	if(selectedServiceStr == "") {
		window.alert("Please select at least 1 service");
		return false;
	} else {
		selectedServiceStr = selectedServiceStr.substr(0, selectedServiceStr.length - 2);
	}

	var firstName = registrationForm.elements.customerFirstName.value;
	window.alert("Hi " + firstName + ", thank you for registering for the " + selectedServiceStr + " service(s)");
	return true;
}