const nameError = document.getElementById('name-error');
const ageError = document.getElementById('age-error');
const emailError = document.getElementById('email-error');
const numberError = document.getElementById('number-error');
const messageError = document.getElementById('message-error');

const validateName = () => {
    var name = document.getElementById('contact-name');
    if(!name.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) 
        {
        nameError.innerHTML = 'Write the full name';
        nameError.style.color = 'red';
        }
    else{
         nameError.innerHTML = '';
        // nameError.style.color = 'green';
        // setTimeout(function() {
        //     nameError.style.display = 'none';
        // },1000)
        }
}
//arrow function to validate name
// const validateName = () => (!document.getElementById('contact-name').value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/) ? nameError.innerHTML = 'Write the full name': nameError.innerHTML = 'Looks good!');

const validateEmail = () => {
    var email = document.getElementById('contact-email').value;
    if(!email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) 
    {
        emailError.innerHTML ="enter the valid email ";
        emailError.style.color = "red";
    }
    else
    {
        emailError.innerHTML = "";
    }
}

const validateAge = () => {
    var myage = document.getElementById('contact-age').value;
    if(!myage.match(/^[0-9]{1,2}$/)) 
    {
         ageError.innerHTML = 'Age not valid';
         ageError.style.color = 'red';
    }
     else
    {
        ageError.innerHTML = '';
        // nameError.style.color = 'green';
        // setTimeout(function() {
        //     nameError.style.display = 'none';
        // },5000)
    } 
}

const validateNumber = () => {
    var number = document.getElementById('contact-number').value;
    if(!number.match(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/)) {
        numberError.innerHTML ="enter the valid phonenumber ";
        numberError.style.color = 'red';

    } else{
        numberError.innerHTML = "" ; 
    }  
}

const validateMessage = () => {
    var message = document.getElementById('contact-message').value;
    var required = 10;
    var left = required - message.length;
    if (message.length == 0) {
             messageError.innerHTML = 'This fiels is empty!';
             messageError.style.color = 'red';

             }
    else if (left > 0) {
            messageError.innerHTML = 'Type minimum TEN words';
            messageError.style.color = 'red';
    }
    else {
            messageError.innerHTML = '';
           
    }
}