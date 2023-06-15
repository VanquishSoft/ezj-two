function displayMessage (evt) {
	if (evt.origin === "https://app.jillsoffice.com") {
		localStorage.setItem("location-data", JSON.stringify(evt.data));
	}
}

window.addEventListener("message", displayMessage);
