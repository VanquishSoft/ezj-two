function displayMessage (...evt) {
	document.getElementById("test").innerHTML += "\n data:"+JSON.stringify(evt);
	if (evt.origin === "https://app.jillsoffice.com") {
		localStorage.setItem("location-data", JSON.stringify(evt.data));
	}
}

if (window.addEventListener) {
	// For standards-compliant web browsers
	window.addEventListener("message", displayMessage, false);
}
else {
	window.attachEvent("onmessage", displayMessage);
}