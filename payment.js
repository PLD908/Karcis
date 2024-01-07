let inputs = document.querySelectorAll('input');
let accounts = document.querySelectorAll('.account');
let card = document.querySelector('.cards');

inputs.forEach(function(input, index) {
    input.addEventListener('click', function() {
        var creditCard = document.getElementById('credit').value;
        var isCreditCardInput = input.id === 'credit';
        var bcaAccount = document.getElementById('bca').value;
        var bniAccount = document.getElementById('bni').value;
        var mandiriAccount = document.getElementById('mand').value;
        var otherAccount = document.getElementById('other').value;
        var gopay = document.getElementById('go').value;
        var ovo = document.getElementById('ovo').value;
        var aja = document.getElementById('aja').value;
        var shopee = document.getElementById('shopee').value;
        var submitButton = document.getElementById('submitform');

        if (creditCard.trim() !== '' || 
            bcaAccount.trim() !== '' || 
            bniAccount.trim() !== '' ||
            mandiriAccount.trim() !== '' || 
            otherAccount.trim() !== '' || 
            gopay.trim() !== ''||
            ovo.trim() !== '' || 
            aja.trim() !== '' || 
            shopee.trim() !== ''
            ) 
            {
            submitButton.style.backgroundColor = '#4F4CEE';
            
        } else {
            submitButton.style.backgroundColor = '#DADAFB';
        }

        if (isCreditCardInput && creditCard.trim() !== '') {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }

        accounts.forEach(function(account) {
            account.classList.remove('active');
        });

        let nextIndex = (index - 1) % accounts.length;
        accounts[nextIndex].classList.add('active');
        
    });
});


document.addEventListener('DOMContentLoaded', function() {
    function navigate() {
        console.log("Checking payment methods...");
        var creditCard = document.getElementById('credit');
        var bcaAccount = document.getElementById('bca');
        var bniAccount = document.getElementById('bni');
        var mandiriAccount = document.getElementById('mand');
        var otherAccount = document.getElementById('other');
        var gopay = document.getElementById('go');
        var ovo = document.getElementById('ovo');
        var aja = document.getElementById('aja');
        var shopee = document.getElementById('shopee');
    
        if (creditCard.value.trim() !== '' || 
            bcaAccount.value.trim() !== '' || 
            bniAccount.value.trim() !== '' ||
            mandiriAccount.value.trim() !== '' || 
            otherAccount.value.trim() !== '' || 
            gopay.value.trim() !== ''||
            ovo.value.trim() !== '' || 
            aja.value.trim() !== '' || 
            shopee.value.trim() !== ''
            ) 
            {
            window.location.href = 'waiting.html';
        } else {
            alert('Please select your payment method');
        }
    };

    document.getElementById('submitform').addEventListener('click', function(event) {
        event.preventDefault();
        navigate();
    });
});