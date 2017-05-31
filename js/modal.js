var container = document.getElementsByClassName("slideshow-container");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == container) {
    container.style.display = "none";
  }
}


