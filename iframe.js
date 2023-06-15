function displayMessage (evt) {
	document.getElementById("test").innerHTML += "\n data:"+JSON.stringify(evt.data);
	if (evt.origin === "https://app.jillsoffice.com") {
		localStorage.setItem("location-data", JSON.stringify(evt.data));
	}
}

window.addEventListener("message", displayMessage);
