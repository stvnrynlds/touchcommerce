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
    	// Field is empty
    	nameFieldset.className = "is-required has-error";
    	nameError = "Full Name is a required field."
    	nameFlag = false;
    	console.log("Invalid name");
    } else {
    	// Field has some characters
    	nameFieldset.className = "is-required";
    	nameFlag = true;
    	console.log("Valid name");
    }

	// Check if Phone is Valid
    if (formPhone === null || formPhone === "") {
    	// Field is empty
    	phoneFieldset.className = "is-required has-error";
		phoneError = "Mobile number is a required field.";
    	phoneFlag = false;
    } else if (formPhone.replace(/\D/g, '').length != 10) {
    	// Field does not have 10 numbers
    	phoneFieldset.className = "is-required has-error";
		phoneError = "Please enter a valid phone number.";
		phoneFlag = false;
    } else {
    	// Field has 10 numbers
    	phoneFieldset.className = "is-required";
    	phoneFlag = true;
    }

    // Display errors if there are any
    document.getElementById("nameError").innerHTML = nameError;
    document.getElementById("phoneError").innerHTML = phoneError;

    // If everything's valid, show the success screen
    if (nameFlag && phoneFlag) { successForm(); }

}


// Conditional Form Element

function stateSelector() {
	var stateDropDown = document.getElementById("state"),
		selection = stateDropDown.options[stateDropDown.selectedIndex].value;

		if (selection === "CA") {
			// If California is selected
			document.getElementById("hiddenField").className = " ";
		} else {
			// If anything else is selected
			document.getElementById("hiddenField").className = "hidden";
		}
}


// Panel Transitions

billingBtn.addEventListener("click", function(){ 
	// move to panel 2 and increase element height
	panelGuide.className = "panel prev";
	panelSurvey.className = "panel current";
	popup.className = "popup popup--tall";
});

function successForm() {
	// move to final panel and decrease element height
	panelSurvey.className = "panel prev";
	panelCongrats.className = "panel current";
	popup.className = "popup";
}