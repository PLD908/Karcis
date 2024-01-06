let guestAction = document.getElementById('guest-action');
let actions = document.getElementById('action');
    actions.style.display = "none";
let guestProfile = document.getElementById('profile');
let signUpLogOut = document.getElementById('sign-up-log-out');
    signUpLogOut.style.display = "none";
let isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

document.getElementById('guest-action').addEventListener('click', function() {
    if (actions.style.display === "none") {
        actions.style.display = "block";
    } else {
        actions.style.display = "none";
    }
})

function updateUIOnLogin() {
    guestAction.style.display = "block";
    guestProfile.style.display = "block";
};

if (isLoggedIn) {
    updateUIOnLogin();    
};

document.getElementById('log-out').addEventListener('click', function() {
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'home.html';
});