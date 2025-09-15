const toggleBtn = document.getElementById("toggle-background");
const targetElement = document.body;
const myForm = document.getElementById("myForm");
const message = document.getElementById("message");
const usernameError = document.getElementById("username-Error")
const emailError = document.getElementById("email-Error")
const passwordError = document.getElementById("password-Error")
const successMessage = document.getElementById("success-message");
const faqsButton = document.getElementById("faq-button");
const faqList = document.getElementById("faq-list");
const faqs = document.getElementById("faqs")

toggleBtn.addEventListener("click", toggleBackgroundColor); //Attaching an event lister to the change background button

//Function that toggles on click to change the body's background color
function toggleBackgroundColor(){
if (targetElement.style.backgroundColor === 'antiquewhite'){
    targetElement.style.backgroundColor = 'black'
} else {
    targetElement.style.backgroundColor = 'antiquewhite'
}
}
//Listening to the form's submit button click to perform validations for the name, email and password fields printing out the appropriate messages
myForm.onsubmit = function(e) {
    e.preventDefault();//prevent default form submission

    //get form values
    const nameValue = document.getElementById("name").value.trim();
    const emailValue = document.getElementById("email").value.trim();
    const passValue = document.getElementById("password").value.trim();

    //clear previous errors
    usernameError.innerText =''
    emailError.innerText = ''
    passwordError.innerText = ''
    let isValid = true;
    //Validate Username
    //Check whether name input is empty
    if (nameValue === '') {
        usernameError.textContent = "Please enter your name!"
        isValid = false
    }
    //check if the name input is less that 3 characters
    else if (nameValue.length < 3){
        usernameError.textContent = "Username must be 3 or more characters!"
        isValid = false
    } 
    //validate email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //validate email regex
    //check is email input field is empty
    if (emailValue === '') {
        emailError.textContent = "Please enter your email!"
        isValid = false
    } 
    //check is email entered matches the email field requirements
    else if (!emailPattern.test(emailValue)) {
        emailError.textContent = "Invalid email format"
        isValid = false
    }

    //validate password
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/ //regex code
    //check is password imput field is empty
    if (passValue === '') {
        passwordError.textContent = "Password cannot be empty!!"
        isValid = false;
    } 
    //check is [assword meets all parameters
    else if (!passwordPattern.test(passValue)) {
        passwordError.textContent = "Must contain at least 8 characters including a number, small letter and a capital letter"
        isValid = false
    }
    //Send a success message after complete validation
    if (isValid) {
        successMessage.textContent = `Thank you ${nameValue} for submitting your details. We will get back to you within 24 hours`
        myForm.reset()
    }
}
faqsButton.addEventListener("click", toggleModal); //add event listener to the faqs button

//function to display and hide the faqs section
function toggleModal() {
    if (faqList.style.display === "none") {
        faqList.style.display = "block"
    }
    else {
        faqList.style.display = "none"
    }
}
