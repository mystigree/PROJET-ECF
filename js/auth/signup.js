// Implémenter le JS de ma page

const inputMail = document.getElementById("inputMail");
const inputPseudo = document.getElementById("inputPseudo");
const inputPassword = document.getElementById("inputPassword");
const inputValidatePassword = document.getElementById("inputValidatePassword");
const btnValidateSignup = document.getElementById("btn-validate-signup");

inputMail.addEventListener("keyup", validateForm);
inputPseudo.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);

function validateForm(){
    const pseudoOk = validateRequired(inputPseudo);
    const mailOk = validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);
    const confirmPasswordOk = validateConfirmPassword(inputPassword, inputValidatePassword);

        if(pseudoOk && mailOk && passwordOk && confirmPasswordOk){
            btnValidateSignup.disabled = false;
            btnValidateSignup.style.borderStyle = "none";
            btnValidateSignup.style.backgroundImage = "linear-gradient(to right, #f600ff, #1500ff, #00bbff, #ff00dd)";
            btnValidateSignup.style.backgroundSize = "200% auto";
            btnValidateSignup.style.transition = "0.4s ease-out";
            btnValidateSignup.addEventListener("mouseover", function(){
                btnValidateSignup.style.backgroundPosition = "100%";
            });
        }
    else{
        btnValidateSignup.disabled = true;
        btnValidateSignup.style.background = "none";
        btnValidateSignup.style.background = "#8a008f";
        btnValidateSignup.style.background = "linear-gradient(to right, #8a008f, #0d0096)";
    }
}

function validateMail(input){
    // Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.style.borderColor = "#00ff6e";
        return true;
    }
    else{
        input.style.borderColor = "#ff00e6";
        return false;
    }
}

function validatePassword(input){
    // Définir mon regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        input.style.borderColor = "#00ff6e";
        return true;
    }
    else{
        input.style.borderColor = "#ff00e6";
        return false;
    }
}

function validateConfirmPassword(inputPwd, inputConfirmPwd){
    if(inputPwd.value === inputConfirmPwd.value && inputConfirmPwd.value != ""){
        inputConfirmPwd.style.borderColor = "#00ff6e";
        return true;
    }
    else{
        inputConfirmPwd.style.borderColor = "#ff00e6";
        return false;
    }

}

function validateRequired(input){
    if(input.value != ""){
        input.style.borderColor = "#00ff6e";
        return true;
    } 
    else{
        input.style.borderColor = "#ff00e6";
        return false;
    }
}