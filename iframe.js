function displayMessage (evt) {
	console.log(evt.data)
	localStorage.setItem("location-data", JSON.stringify(evt.data));
}

if (window.addEventListener) {
	// For standards-compliant web browsers
	window.addEventListener("message", displayMessage, false);
}
else {
	window.attachEvent("onmessage", displayMessage);
}