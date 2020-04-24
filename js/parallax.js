
// Function to create enhanced parallax effect
function scroll() {
    var t = window.scrollY;
    var para = document.getElementById("para");
    var m = -0.60;
    var b = 0;

    newY = m*t + b
    para.style.backgroundPositionY = newY + "px";
    
}