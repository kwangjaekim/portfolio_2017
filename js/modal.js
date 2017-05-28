// Get the modal

var modal-eco = document.getElementById('ecobridge-portfolio');

var modal-animaru = document.getElementById('animaru-isu-portfolio');


var img = document.getElementsByClassName("main");

img.onclick = function() {
    modal-eco.style.display = "block";
    
}

// Get the span element that closes the modal

var span = document.getElementsByClassName("close")[0];


// When user clicks on span (x), close the modal

span.onclick = function() {
    modal.style.display = "none";
}


// When user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}