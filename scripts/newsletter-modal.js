// Get the modal
var modal = document.getElementById("myModal");

// Load on webpage load
window.onload = function() {
  if (localStorage.dontShow == "true") { }
  else {
    modal.style.display = "flex";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Use local storage to track if user has closed modal previously
function forgetMe() {
  localStorage.dontShow = "true";
  modal.style.display = "none";
}