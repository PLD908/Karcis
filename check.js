let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let number = document.getElementById('number');
let email = document.getElementById('email');
let confirmEmail = document.getElementById('email2');
let submit = document.getElementById('submitform');

document.getElementById('form').addEventListener('input', function(){
    if (firstName.value.trim() !== '' && 
        lastName.value.trim() !== '' && 
        number.value.trim() !== '' && 
        email.value.trim() !== '' && 
        confirmEmail.value.trim() !== ''
        ) {
        submit.style.backgroundColor = '#4F4CEE';
    } else {
        submit.style.backgroundColor = '#DADAFB';
    }
});

function navigate() {
    if (firstName.value.trim() !== '' &&
        lastName.value.trim() !== '' &&
        number.value.trim() !== '' &&
        email.value.trim() !== '' &&
        confirmEmail.value.trim() !== '' &&
        email.value.trim() === confirmEmail.value.trim()
        ) {
            window.location.href = 'payment.html';
        } else if (email.value.trim() !== confirmEmail.value.trim()) {
            alert("The entered emails do not match.");
        }
        else {
            alert("Please fill the contact information");
        }
};

window.addEventListener('DOMContentLoaded', function() {
    submit.addEventListener('click', function(event) {
        event.preventDefault();
        navigate();
    });
});

let storedTicketName = localStorage.getItem('ticketName');
let storedTicketPriceString = localStorage.getItem('ticketPrice');
let qtyValue = localStorage.getItem('qtyValue');

let ticketNameElement = document.getElementById('stored-ticket-name');
let ticketPriceElement = document.getElementById('stored-ticket-price');
let totalElement = document.getElementById('total-price');

ticketNameElement.textContent = storedTicketName;
ticketPriceElement.textContent = qtyValue + " * " + storedTicketPriceString;
let storedTicketPrice = storedTicketPriceString.replace('$', '');
totalElement.textContent = '$' + qtyValue * storedTicketPrice;