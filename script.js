var password = "speb112";

function passcheck() {

	if (document.getElementById('lærer2349').value != password) {
		alert('Incorrect passcode, try again.');
		return false;
	}

	if (document.getElementById('lærer2349').value == password) {
		alert('Passcode correct, press OK to proceed. (Please note that it may take a few minutes to publish new assignments.)');
	}
}
