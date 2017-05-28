// Get the modal

var modal = document.getElementById('myModal');


// Get the image and insert it inside the modal

var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
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