$(function() {
    addEvents();
});

function addEvents() {
    let $buttonElement = $("#submitButton");
    $buttonElement.on("click", function() {
    let $firstNameElement = $("#firstName");
    let $lastNameElement = $("#lastName");

        if ($firstNameElement.val() === "")  { 
            console.log("Empty value first name");
            $firstNameElement.addClass("invalidInput");
            $lastNameElement.removeClass("invalidInput");
        }
        else if ($lastNameElement.val() === "") {
            console.log("Empty value last name");
            $lastNameElement.addClass("invalidInput");
            $firstNameElement.removeClass("invalidInput");
        }
        else {
            let $newElement = $('<div class="confirmationBanner">Thank you for contacting us,  </div>')
            console.log($newElement.html() + $firstNameElement.val() + " " + $lastNameElement.val());
            $newElement.html($newElement.html() + $firstNameElement.val());
            $('form').append($newElement);
            
            $firstNameElement.removeClass("invalidInput");
            $lastNameElement.removeClass("invalidInput");
        }
    });
}

