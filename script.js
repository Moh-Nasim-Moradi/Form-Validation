const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');


function nameValidation() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = "name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "write full name";
        return false;
    }
    nameError.innerHTML = "valid";
    return true;
}

function phoneValidation() {
    var phone = document.getElementById('contact-phone').value;
    const input=/^\d{10}$/;
    if (phone.length == 0) {
        phoneError.innerHTML = "phone no is required";
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "phone no must be 10 digits!";
        return false;
    }

    if(!input.test(phone)){
        phoneError.innerHTML = "Only digits please!";
        return false;
    }
    else{
        phoneError.innerHTML = "valid";
        return true;
    }
}

function emailValidation() {
    var email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = "email is required.";
        return false;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailError.innerHTML = "Email invalid!";
        return false;
    }
    emailError.innerHTML = "valid";
    return true;
}

function messageValidation(){
    var message=document.getElementById('contact-message').value;
    let count=30;
    let left=count-message.length;
    if(left>0){
        messageError.innerHTML= left+"more chracters are required!";
        return false;
    }
    else{
        messageError.innerHTML="valid";
        return true;
    }


}

function submitForm(){
    if(!nameValidation() || !phoneValidation() || !emailValidation() || !messageValidation()){
        submitError.innerHTML="first fix the error than submit.";
        submitError.style.display='block';
        setTimeout(function(){
            submitError.style.display='none';
        },3000)
        return false;
    }
}