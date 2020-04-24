// Function to check if a string has numbers using regEx
function hasNumbers(t)
{
var reg = /\d/;
return reg.test(t);
}  

// Function to ensure that a name is valid
function checkName() {
    var namebox = document.getElementById("name");
    var name = namebox.value;
    
    if (name.length > 6 && !(hasNumbers(name))) {
        // Valid.
        namebox.style.borderColor = "green";
        namebox.style.color = "green";
        
    } else {
        // Invalid.
        namebox.style.borderColor = "red";
        namebox.style.color = "red";
    }
}

//Function to ensure that a message is valid
function checkMessage() {
    var messageBox = document.getElementById("message");
    var name = messageBox.value;

    if(name.length > 10 && name.length < 30) {
        messageBox.style.borderColor = "green";
        messageBox.style.color = "green";
        
    } else {
        messageBox.style.borderColor = "red";
        messageBox.style.color = "red";
    }
}

//Function to show the product ID field if they select a product ID inquiry
function showProdID () {
    var IDlabel = document.getElementById("IDlabel");
    var IDcode = document.getElementById("ID");
    
    IDlabel.className = "visible";
    IDcode.className = "visible";
}

// Function to hide the product ID field when not needed
function hideBoxes(){
    var IDlabel = document.getElementById("IDlabel");
    var IDcode = document.getElementById("ID");
    
    IDlabel.className = "hidden";
    IDcode.className = "hidden";
}

//Function to check the inquiry type and show product ID field if selected
function checkReason(){
    var inquiryBox = document.getElementById("reason");
    var opts = inquiryBox.options;
    var si = inquiryBox.selectedIndex;
    var sel = opts[si];

    hideBoxes();

    if(sel.index == 3){
        showProdID();

    }
}

//Function to validate email address
function validateEmail(){
    var emailField = document.getElementById("email");
    var reg = /\d (\+\d){2,4}/

    if (reg.test(emailField.value) == false) 
    {
        emailField.style.borderColor = "red";
        emailField.style.color = "red";
    }
    else{
        emailField.style.borderColor = "green";
        emailField.style.color = "green";
    }

}

//Function to validate the product code
function checkProdCode(){
    var codeField = document.getElementById("ID");
    var code = codeField.value;
    console.log("hi");

    if (code == "BB6001" || code == "BB6002" || code == "BB6003" || code == "BB6004" || code == "BB6005" || code == "BB6006" || code == "BB6007" || code == "BB6008"){
        codeField.style.borderColor = "green";
        codeField.style.color = "green";
    }
    else{
        codeField.style.borderColor = "red";
        codeField.style.color = "red";
    }
}