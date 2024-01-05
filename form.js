document.getElementById('guest').addEventListener('input', function(){
    var firstName = document.getElementById('firstname');
    var lastName = document.getElementById('lastname');
    var number = document.getElementById('number');
    var email = document.getElementById('email');
    var submit = document.getElementById('submitform');

    if (firstName.value.trim() !== '' && lastName.value.trim() !== '' && number.value.trim() !== '' && email.value.trim() !== '') {
        submit.style.backgroundColor = '#4F4CEE';
    } else {
        submit.style.backgroundColor = '#DADAFB';
    }
});

document.getElementById('login').addEventListener('input', function(){
    var email = document.getElementById('emailLogin');
    var password = document.getElementById('passwordLogin');
    var submit = document.getElementById('submitLogin');

    if (email.value.trim() !== '' && password.value.trim() !== '') {
        submit.style.backgroundColor = '#4F4CEE';
    } else {
        submit.style.backgroundColor = '#DADAFB';
    }
});