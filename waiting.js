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