let driveIn = document.querySelectorAll('.drive-in');
let conference = document.querySelectorAll('.conference');
let driveInCard = document.querySelectorAll('.indrive');
let conferenceCard = document.querySelectorAll('.conf');

function search() {
    const showSearch = document.getElementById('search').value.toLowerCase();
    document.getElementById('showValue').innerText = '"' + showSearch + '"';

    driveInCard.forEach((item, index) => {
        const driveInText = driveIn[index].innerText.toLowerCase();
        if (driveInText.includes(showSearch)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });

    conferenceCard.forEach((item, index) => {
        const conferenceText = conference[index].innerText.toLowerCase();
        if (conferenceText.includes(showSearch)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
};

let angleDown = document.querySelectorAll('.angleDown');
let dropText = document.querySelectorAll('.drop');

dropText.forEach(item => {
    item.style.display = "none";
});

angleDown.forEach((angle, index) => {
    angle.addEventListener('click', function() {
        dropText.forEach((item, i) => {
            if (i === index) {
                if (item.style.display === "none") {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            }
        });
    });
});

document.getElementById('toggleSwitch').addEventListener('click', function() {
    driveInCard.forEach(item => {
        if (item.style.display === "none") {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

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

const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

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