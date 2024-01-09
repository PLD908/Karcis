document.getElementById('inputbox').addEventListener('input', function() {
    let input = document.getElementById('number');
    let submitPayment = document.getElementById('submitpayment');

    if (input.value.trim() !== '') {
        submitPayment.style.backgroundColor = "#4F4CEE";
    } else {
        submitPayment.style.backgroundColor = "#DADAFB";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let phoneNumberInput = document.getElementById('number');
    let submitPaymentButton = document.getElementById('submitpayment');

    function navigate() {
        let phoneNumber = phoneNumberInput.value.trim();

        if (phoneNumber !== '') {
            window.location.href = 'completed.html';
        } else {
            alert('Please fill the phone number');
        }
    }

    submitPaymentButton.addEventListener('click', function(event) {
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