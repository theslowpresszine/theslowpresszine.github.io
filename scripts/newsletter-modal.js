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

function submitFormModal() {
   // Get the first form with the name
   // Usually the form name is not repeated
   // but duplicate names are possible in HTML
   // Therefore to work around the issue, enforce the correct index
   var frm = document.getElementsByName('modal-form')[0];
   frm.submit(); // Submit the form
   frm.reset();  // Reset all form data
   forgetMe();  // never prompt modal again
   return false; // Prevent page refresh
}