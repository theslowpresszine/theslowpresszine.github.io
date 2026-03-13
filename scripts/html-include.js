function includeHTML() {
	  var z, i, elmnt, file, xhttp;
	  /*loop through a collection of all HTML elements:*/
	  z = document.getElementsByTagName("*");
	  for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain attribute:*/
		file = elmnt.getAttribute("w3-include-html");
		if (file) {
		  /*make an HTTP request using the attribute value as the file name:*/
		  xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function() {
			if (this.readyState == 4) {
			  if (this.status == 200) {elmnt.innerHTML = this.responseText;}
			  if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
			  /*remove the attribute, and call this function once more:*/
			  elmnt.removeAttribute("w3-include-html");
			  includeHTML();
			}
		  }      
		  xhttp.open("GET", file, true);
		  xhttp.send();
		  /*exit the function:*/
		  return;
		}
	  }
	};
	
function submitFormBottom() {
	// Get the first form with the name
	// Usually the form name is not repeated
	// but duplicate names are possible in HTML
	// Therefore to work around the issue, enforce the correct index
	var frm = document.getElementsByName('bottom-form')[0];
    let x = document.forms["bottom-form"]["validation"].value;
	if (x == "4") {
		frm.submit(); // Submit the form
		frm.reset();  // Reset all form data
		return false; // Prevent page refresh
	} else {
		alert("Failed validation.");
		frm.reset();
		return false;
	}
};