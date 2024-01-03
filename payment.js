let inputs = document.querySelectorAll('input');
let accounts = document.querySelectorAll('.account');
let card = document.querySelector('.cards');

inputs.forEach(function(input, index) {
    input.addEventListener('click', function() {
        let creditCard = document.getElementById('credit').value;
        let isCreditCardInput = input.id === 'credit';
        let bcaAccount = document.getElementById('bca').value;
        let bniAccount = document.getElementById('bni').value;
        let mandiriAccount = document.getElementById('mand').value;
        let otherAccount = document.getElementById('other').value;
        let gopay = document.getElementById('go').value;
        let ovo = document.getElementById('ovo').value;
        let aja = document.getElementById('aja').value;
        let shopee = document.getElementById('shopee').value;
        let submitButton = document.getElementById('submitform');

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