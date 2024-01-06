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