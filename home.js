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

// Here is about the search and anytime i search it should direct me to search.html and search for the event
document.getElementById('search-button').addEventListener('click', function() {
    const searchQuery = document.getElementById('search-input').value;
    const encodedSearchQuery = encodeURIComponent(searchQuery);

    window.location.href = 'search.html?search=' + encodedSearchQuery;
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
})