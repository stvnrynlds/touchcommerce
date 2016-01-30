// Form Validation

function validateForm() {
	var form = document.forms["prechatSurvey"],
		formName = form["name"].value,
		formPhone = form["phone"].value;

    if (!validName(formName)) {
        alert("Name must be filled out");
    }

    if (!validPhone(formPhone)) {
    	alert("Phone must be filled out");
    }
}

function validName(value) {
	value = value;
    return false;
}

function validPhone(value) {
	value = value;
	return false;
}


// Panel Transitions