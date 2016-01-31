// Var Declarations

var popup = document.getElementById("popupWrap"),
	billingBtn = document.getElementById("billingBtn"),
	panelGuide = document.getElementById("panelGuide"),
	panelSurvey = document.getElementById("panelSurvey"),
	panelCongrats = document.getElementById("panelCongrats");

// Form Validation

function validateForm() {
	var form = document.forms["prechatSurvey"],
		formName = form["name"].value,
		formPhone = document.getElementById("phone").value,
		nameFieldset = document.getElementById("nameFieldset"),
		phoneFieldset = document.getElementById("phoneFieldset"),
		phoneError = "",
		nameError = "",
		nameFlag, phoneFlag;


	// Check if Full Name is Valid
    if (formName === null || formName === "") {
    	nameFieldset.className = "is-required has-error";
    	nameError = "Full Name is a required field."
    	nameFlag = false;
    	console.log("Invalid name");
    } else {
    	nameFieldset.className = "is-required";
    	nameFlag = true;
    	console.log("Valid name");
    }

	// Check if Phone is Valid
    if (formPhone === null || formPhone === "") {
    	phoneFieldset.className = "is-required has-error";
		phoneError = "Mobile number is a required field.";
    	phoneFlag = false;
    } else if (formPhone.replace(/\D/g, '').length != 10) {
    	phoneFieldset.className = "is-required has-error";
		phoneError = "Please enter a valid phone number.";
		phoneFlag = false;
    } else {
    	phoneFieldset.className = "is-required";
    	phoneFlag = true;
    }

    // Print errors if there are any
    document.getElementById("nameError").innerHTML = nameError;
    document.getElementById("phoneError").innerHTML = phoneError;

    // If everything's valid, show the success screen
    if (nameFlag && phoneFlag) { successForm(); }
}

// Panel Transitions

billingBtn.addEventListener("click", function(){ 
	panelGuide.className = "panel prev";
	panelSurvey.className = "panel current";
	popup.className = "popup popup--tall";
});

function successForm() {
	panelSurvey.className = "panel prev";
	panelCongrats.className = "panel current";
	popup.className = "popup";
}