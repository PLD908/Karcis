document.getElementById('inputbox').addEventListener('input', function() {
    let input = document.getElementById('number');
    let submitPayment = document.getElementById('submitpayment');

    if (input.value.trim() !== '') {
        submitPayment.style.backgroundColor = "#4F4CEE";
    } else {
        submitPayment.style.backgroundColor = "#DADAFB";
    }
});