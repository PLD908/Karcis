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
        confirmEmail.value.trim() !== ''
        ) {
            window.location.href = 'payment.html';
        } else {
            alert("Please fill the contact information")
        }
}
window.addEventListener('DOMContentLoaded', function() {
    submit.addEventListener('click', function(event) {
        event.preventDefault();
        navigate();
    });
});