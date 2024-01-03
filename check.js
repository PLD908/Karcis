document.getElementById('form').addEventListener('input', function(){
    var firstName = document.getElementById('firstname');
    var lastName = document.getElementById('lastname');
    var number = document.getElementById('number');
    var email = document.getElementById('email');
    var comfirmEmail = document.getElementById('email2');
    var submit = document.getElementById('submitform');

    if (firstName.value.trim() !== '' && lastName.value.trim() !== '' && number.value.trim() !== '' && email.value.trim() !== '' && comfirmEmail.value.trim() !== '') {
        submit.style.backgroundColor = '#4F4CEE';
    } else {
        submit.style.backgroundColor = '#DADAFB';
    }
});