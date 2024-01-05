function condition() {
    if (conditionText.style.display === "none") {
        conditionText.style.display = "block"
    } else {
        conditionText.style.display = "none"
    }
};

let guestAction = document.getElementById('guest-action');
    guestAction.style.display = "none";
let actions = document.getElementById('action');
    actions.style.display = "none";
let loginButton = document.getElementById('login-button');
    loginButton.style.display = "block"; 
let guestProfile = document.getElementById('profile');
    guestProfile.style.display = "none";
let signUpButton = document.getElementById('btn');
    signUpButton.style.display = "block"; 

function updateUIOnLogin() {
    loginButton.style.display = "none";
    signUpButton.style.display = "none";
    guestAction.style.display = 'block';
    guestProfile.style.display = 'block';
};

document.getElementById('submitform').addEventListener('click', function() {
    sessionStorage.setItem('isLoggedIn', 'true');
    window.location.reload();
    updateUIOnLogin();
});

document.getElementById('guest-action').addEventListener('click', function() {
    if (actions.style.display === "none") {
        actions.style.display = "block";
    } else {
        actions.style.display = "none";
    }
});

let isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

if (isLoggedIn) {
    updateUIOnLogin();
};

document.getElementById('log-out').addEventListener('click', function() {
    sessionStorage.removeItem('isLoggedIn');

    window.location.reload();
});

document.getElementById('buy').addEventListener('click', function() {
    if(isLoggedIn) {
        window.location.href = 'ticket.html';
    } else {
        alert('You have to login first')
    }
});