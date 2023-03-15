const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#formMessage");
const messageError = document.querySelector("formMessage");
const successMessage = document.querySelector("#successMessage");


function validateForm() {
    console.log("hello");
}

form.addEventListener("submit", validateForm);
