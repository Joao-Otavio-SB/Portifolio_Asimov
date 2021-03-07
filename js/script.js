function openN() {

	var x = document.getElementById("navigation");

	if (x.className === "navigation") {
		x.className += " menuJS";
        document.getElementById("threelineIcon").innerHTML = "&Cross;";
	} else {
		x.className = "navigation";
        document.getElementById("threelineIcon").innerHTML = "&#x2630;";
	}

}