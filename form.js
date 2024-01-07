let actions = document.getElementById('action');
    actions.style.display = "none";
let guestProfile = document.getElementById('profile');
    guestProfile.style.display = "none";
let guestAction = document.getElementById('guest-action');
    guestAction.style.display = "none";
let loginButton = document.getElementById('login-button');
let signUpButton = document.getElementById('btn');
let signUpLogOut = document.getElementById('sign-up-log-out');
    signUpLogOut.style.display = "none";
let guestSignUpButtom = document.getElementById('guest-signUp');

function updateUIOnLogin() {
    loginButton.style.display = "none";
    signUpButton.style.display = "none";
    guestAction.style.display = 'block';
    guestProfile.style.display = 'block';
};

function updateUIOnSignUp() {
    loginButton.style.display = "none";
    signUpButton.style.display = "none";
    guestAction.style.display = "none";
    guestProfile.style.display = "block";
    signUpLogOut.style.display = "block"
};

document.getElementById('submitform').addEventListener('click', function() {
    var firstName = document.getElementById('firstname');
    var lastName = document.getElementById('lastname');
    var number = document.getElementById('number');
    var email = document.getElementById('email');

    if (firstName.value.trim() !== '' && 
        lastName.value.trim() !== '' && 
        number.value.trim() !== '' && 
        email.value.trim() !== ''
        ) {
        sessionStorage.setItem('isLoggedIn', 'true');
        window.location.reload();
        updateUIOnLogin();
    } else {
        sessionStorage.setItem('isLoggedIn', 'false');
        alert("Please fill the form")
    }
});

let isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

if (isLoggedIn) {
    updateUIOnLogin();
};

document.getElementById('sign-up-button').addEventListener('click', function(event) {
    event.preventDefault();

    var signUpFirstName = document.getElementById('sign-up-firstname');
    var signUpLastName = document.getElementById('sign-up-lastname');
    var signUpNumber = document.getElementById('sign-up-number');
    var signUpPassword = document.getElementById('sign-up-password');
    var signUpEmail = document.getElementById('sign-up-email');
    var signUpConfirmEmail = document.getElementById('sign-up-confirm-email');

    if (signUpFirstName.value.trim() !== '' && 
        signUpLastName.value.trim() !== '' && 
        signUpNumber.value.trim() !== '' && 
        signUpPassword.value.trim() !== '' && 
        signUpEmail.value.trim() !== '' &&
        signUpConfirmEmail.value.trim() !== '' &&
        signUpEmail.value.trim() === signUpConfirmEmail.value.trim()
        ) {
        sessionStorage.setItem('isSignedIn','true');
        window.location.reload();
        updateUIOnSignUp();
    } else if (signUpEmail.value.trim() !== signUpConfirmEmail.value.trim()) {
        alert("The entered emails do not match.")
    }
    else {
        sessionStorage.setItem('isSignedIn', 'false');
        alert("Please fill the form")
    }
});

let isSignedIn = sessionStorage.getItem('isSignedIn') === 'true';

if (isSignedIn) {
    updateUIOnSignUp();
};

document.getElementById('guest-action').addEventListener('click', function() {
    if (actions.style.display === "none") {
        actions.style.display = "block";
    } else {
        actions.style.display = "none";
    }
});

document.getElementById('log-out').addEventListener('click', function() {
    sessionStorage.removeItem('isLoggedIn');

    window.location.reload();
});

document.getElementById('sign-up-log-out').addEventListener('click', function() {
    sessionStorage.removeItem('isSignedIn');
    sessionStorage.removeItem('isLoggedIn');

    window.location.reload();
});

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

let signUp = document.querySelector('.signup')
    signUp.style.display = "none";

document.getElementById('btn').addEventListener('click', function() {
    if (signUp.style.display === "none") {
        signUp.style.display = "block";
    } else {
        signUp.style.display = "none";
    }
});

document.getElementById('guest-signUp').addEventListener('click', function() {
    if (signUp.style.display === "none") {
        signUp.style.display = "block";
    } else {
        signUp.style.display = "none";
    }
});

document.getElementById('guest').addEventListener('input', function(){
    var firstName = document.getElementById('firstname');
    var lastName = document.getElementById('lastname');
    var number = document.getElementById('number');
    var email = document.getElementById('email');
    var submit = document.getElementById('submitform');

    if (firstName.value.trim() !== '' && 
        lastName.value.trim() !== '' && 
        number.value.trim() !== '' && 
        email.value.trim() !== ''
        ) {
        submit.style.backgroundColor = '#4F4CEE';
    } else {
        submit.style.backgroundColor = '#DADAFB';
    }
});

document.getElementById('login').addEventListener('input', function(){
    var email = document.getElementById('emailLogin');
    var password = document.getElementById('passwordLogin');
    var submit = document.getElementById('submitLogin');

    if (email.value.trim() !== '' && 
        password.value.trim() !== '') {
        submit.style.backgroundColor = '#4F4CEE';
    } else {
        submit.style.backgroundColor = '#DADAFB';
    }
});

document.getElementById('submitLogin').addEventListener('click', function() {
    var email = document.getElementById('emailLogin');
    var password = document.getElementById('passwordLogin');

    if (email.value.trim() !== '' && 
        password.value.trim() !== ''
        ) {
        sessionStorage.setItem('isSignedIn','true');
        window.location.reload();
        updateUIOnSignUp();
    } else {
        sessionStorage.setItem('isSignedIn','false');
        alert("Please fill the form");
    }
})

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