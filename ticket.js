let showTicket = document.getElementById("ticket");
showTicket.style.display = "none";

let icons = document.querySelectorAll('.icon');
let minusIcons = document.querySelectorAll('.icon-minus');
let amountOfTicket = document.querySelectorAll('.amount');
let ticketNameDisplay = document.getElementById('ticket-name');
let ticketPriceDisplay = document.getElementById('price');

icons.forEach(function (icon) {
    icon.addEventListener('click', function() {
        let footerH4 = document.getElementById('text');
        let showTicket = document.getElementById('ticket');
        let ticketName = icon.dataset.ticketName;
        let ticketPrice = icon.dataset.ticketPrice;
        
        if (footerH4.innerText !== '') {
            footerH4.style.display = "none";
            showTicket.style.display = "block";
        } else {
            footerH4.style.display = "block";
            showTicket.style.display = "none";
        }

        ticketNameDisplay.textContent = ticketName;
        ticketPriceDisplay.textContent = ticketPrice;
    });
});

document.querySelectorAll('.amount').forEach(function(ticket) {
    let amountOfTicketElement = ticket.querySelector('.amountOfTicket');
    let plusIconElement = ticket.querySelector('.icon');
    let minusIconElement = ticket.querySelector('.icon-minus');
    let qtyValue = document.getElementById('qtyValue');
    let ticketAmount = 0;

    plusIconElement.addEventListener('click', function() {
        ticketAmount++;
        amountOfTicketElement.textContent = ticketAmount;
        qtyValue.textContent = ticketAmount;
    });
    
    minusIconElement.addEventListener('click', function() {
        if (ticketAmount > 0) {
            ticketAmount--;
            amountOfTicketElement.textContent = ticketAmount;
            qtyValue.textContent = ticketAmount;
        }
    });
});