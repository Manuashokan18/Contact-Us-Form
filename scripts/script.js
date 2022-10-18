const nameError = document.getElementById('name-error');
const ageError = document.getElementById('age-error');
const emailError = document.getElementById('email-error');
const numberError = document.getElementById('number-error');
const messageError = document.getElementById('message-error');
//normal function
// function validateName() {
//     !document.getElementById('contact-name').value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/) ? nameError.innerHTML = 'Write the full name': nameError.innerHTML = 'Valid';
// }

//arrow function
const validateName = () => (!document.getElementById('contact-name').value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/) ? nameError.innerHTML = 'Write the full name': nameError.innerHTML = '');


function validateAge() {
    var myage = document.getElementById('contact-age').value;
    !myage.match(/^[0-9]{1,2}$/) ? ageError.innerHTML = 'Age not valid':  ageError.innerHTML = '';
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;
    !email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$") ? emailError.innerHTML ="enter the valid email ": emailError.innerHTML = "";
}

function validateNumber() {
    var number = document.getElementById('contact-number').value;
    !number.match(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/) ? numberError.innerHTML ="enter the valid phonenumber " : numberError.innerHTML = "" ; 
}
function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 10;
    var left = required - message.length;
    if (message.length == 0) {
             messageError.innerHTML = 'This fiels is empty!';
             }
    else if (left > 0) {
            messageError.innerHTML = 'Type minimum TEN words';
    }
    else {
            messageError.innerHTML = '';
            messageError.style.color = 'seagreen';
    }
}