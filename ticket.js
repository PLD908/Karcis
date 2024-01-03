let showTicket = document.getElementById("ticket")
    showTicket.style.display = "none";

let icons = document.querySelectorAll('.icon');
let amountOfTicket = document.querySelectorAll('.amount');

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

        amountOfTicket.forEach(function(ticket) {
            amountOfTicketElement = ticket.querySelector('.amountOfTicket');
            let iconElement = ticket.querySelector('.icon');
            let ticketAmount = 0;

            iconElement.addEventListener('click', function() {
                ticketAmount++;
                
                amountOfTicketElement.textContent = ticketAmount;
            })
        })

    });
});