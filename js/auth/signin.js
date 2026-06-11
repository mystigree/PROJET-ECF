const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials)

function checkCredentials() {
    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    if(mailInput.value === "user@example.com" && passwordInput.value === "password"){
        // Il faudra récuprérer le vrai token
        const token = "exempleToken";
        setToken(token);

        setCookie(RoleCookieName, "admin", 7);

        // Placer ce token en cookie
        window.location.href = "/";
    } 
    else{
        mailInput.style.borderColor = "#ff00e6";
        passwordInput.style.borderColor = "#ff00e6";
    }
}