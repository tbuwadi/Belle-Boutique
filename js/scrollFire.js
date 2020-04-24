//Function to create fade in effect on scroll using scroll fire
//This is used to make the 3 employees fade in
function scrollFunction() {

    var scroll = window.scrollY;
    
    var emp1 = document.getElementById("emp1")
    var emp2 = document.getElementById("emp2")
    var emp3 = document.getElementById("emp3")


    if (scroll > 800) {
        emp1.style.opacity = "1";
        emp2.style.opacity = "1";
        emp3.style.opacity = "1";
    }
}