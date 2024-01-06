function condition() {
    if (conditionText.style.display === "none") {
        conditionText.style.display = "block"
    } else {
        conditionText.style.display = "none"
    }
};

document.getElementById('buy').addEventListener('click', function() {
    if(isLoggedIn) {
        window.location.href = 'ticket.html';
    } else {
        alert('You have to login first')
    }
});