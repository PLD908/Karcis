let showTicket = document.getElementById("ticket")
    showTicket.style.display = "none";

let icons = document.querySelectorAll('.icon');

icons.forEach(function(icon) {
    icon.addEventListener('click', function() {
        let footerH4 = document.getElementById('text');
        let showTicket = document.getElementById('ticket');
    
        if (footerH4 !== '') {
            footerH4.style.display = "none";
            showTicket.style.display = "block";
        } else {
            footerH4.style.display = "block";
            showTicket.style.display = "none";
        }
    });
});