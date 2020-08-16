var form = document.getElementById('form');
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    addEvents()
})

function addEvents() {
    if (firstName.value == "") { 
        console.log("Empty value first name");
        firstName.classList.add("invalidInput");
        lastName.classList.remove("invalidInput");
    }
    else if (lastName.value == "") {
        console.log("Empty value last name");
        lastName.classList.add("invalidInput");
        firstName.classList.remove("invalidInput");
    }
    else {
        var confBanner = document.getElementById("confirmationBannerId");
        confBanner.classList.add("confirmationBanner");
        document.getElementById("confirmationBannerId").innerHTML = "Thank you for contacting us, " + firstName.value;

        firstName.classList.remove("invalidInput");
        lastName.classList.remove("invalidInput");
        console.log('Thank you for contacting us, ' + firstName.value + " " + lastName.value);
    }
}



