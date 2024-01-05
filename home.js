let actions = document.getElementById('action');
    actions.style.display = "none";
let guestProfile = document.getElementById('profile');
    guestProfile.style.display = "none";
let guestAction = document.getElementById('guest-action');
    guestAction.style.display = "none";
let loginButton = document.getElementById('login-button');
let signUpButton = document.getElementById('btn');

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

let isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

if (isLoggedIn) {
    updateUIOnLogin();
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
};
function guest() {
setVisibility("guest", "")
setVisibility("login", "none")
};