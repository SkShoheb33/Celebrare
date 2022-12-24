var loadImage = function(event) {
    // document.getElementById("pic").src = "url(" + URL.createObjectURL(event.target.files[0]) + ")";
    document.getElementById("pic1").src = URL.createObjectURL(event.target.files[0]);
    document.getElementById("pic").src = URL.createObjectURL(event.target.files[0]);
}