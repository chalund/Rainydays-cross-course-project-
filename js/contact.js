const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#formMessage");
const messageError = document.querySelector("#messageError");
const successMessage = document.querySelector("#successMessage");


function validateForm(event) {
    event.preventDefault();

    let hasErrors = false;

    if (checkLength(fullName.value)=== true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
        hasErrors = true;
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        hasErrors = true;
    }

    if (checkLength(subject.value)=== true) {
        subjectError.style.display ="none";
    } else {
        subjectError.style.display = "block";
        hasErrors = true;
    }

    if (checkLength(message.value) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
        hasErrors = true;
    }

    if (!hasErrors === true) {
        successMessage.style.display = "block";
    } else {
        successMessage.style.display = "none";
    }


}

form.addEventListener("submit", validateForm);



function checkLength(value) {

    if(value.trim().length) {
        return true;
    } else {
        return false;
    }
}


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
