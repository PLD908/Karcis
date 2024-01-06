document.getElementById('guest').addEventListener('input', function(){
    var firstName = document.getElementById('firstname');
    var lastName = document.getElementById('lastname');
    var number = document.getElementById('number');
    var email = document.getElementById('email');
    var submit = document.getElementById('submitform');

    if (firstName.value.trim() !== '' && lastName.value.trim() !== '' && number.value.trim() !== '' && email.value.trim() !== '') {
        submit.style.backgroundColor = '#4F4CEE';
    } else {
        submit.style.backgroundColor = '#DADAFB';
    }
});

document.getElementById('login').addEventListener('input', function(){
    var email = document.getElementById('emailLogin');
    var password = document.getElementById('passwordLogin');
    var submit = document.getElementById('submitLogin');

    if (email.value.trim() !== '' && password.value.trim() !== '') {
        submit.style.backgroundColor = '#4F4CEE';
    } else {
        submit.style.backgroundColor = '#DADAFB';
    }
});

let form = document.getElementById('form')
    form.style.display = "none";
let loginPage = document.getElementById('login')
    loginPage.style.display = "none";
let conditionText = document.getElementById('text')
    conditionText.style.display = "none";

function login() {
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
};

function setVisibility(elemID, disp) {
    var x = document.getElementById(elemID);
        x.style.display = disp;
}
function log() {
setVisibility("login", "")
setVisibility("guest", "none")
}
function guest() {
setVisibility("guest", "")
setVisibility("login", "none")
};

document.getElementById('sign-up').addEventListener('input', function(){
    var signUpFirstName = document.getElementById('sign-up-firstname');
    var signUpLastName = document.getElementById('sign-up-lastname');
    var signUpNumber = document.getElementById('sign-up-number');
    var signUpPassword = document.getElementById('sign-up-password');
    var signUpEmail = document.getElementById('sign-up-email');
    var signUpConfirmEmail = document.getElementById('sign-up-confirm-email');
    var signUpButton = document.getElementById('sign-up-button');

    if (signUpFirstName.value.trim() !== '' && 
        signUpLastName.value.trim() !== '' && 
        signUpNumber.value.trim() !== '' && 
        signUpPassword.value.trim() !== '' && 
        signUpEmail.value.trim() !== '' &&
        signUpConfirmEmail.value.trim() !== ''
        ) {
        signUpButton.style.backgroundColor = '#4F4CEE';
    } else {
        signUpButton.style.backgroundColor = '#DADAFB';
    }
});