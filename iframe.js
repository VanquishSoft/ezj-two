function displayMessage (evt) {
	if (evt.origin === "https://app.jillsoffice.com") {




	document.getElementById("test").innerHTML = "data:"+JSON.stringify(evt);
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