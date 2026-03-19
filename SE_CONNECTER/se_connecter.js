// Définir la variable "labelemail" en sélectionnant la classe "labelemail"
const labelemail = document.querySelector('.labelemail')
// Définir la variable "inputemail" en sélectionnant la classe "inputemail"
const inputemail = document.querySelector('.inputemail')

// Définir la variable "labelmotdepasse" en sélectionnant la classe "labelmotdepasse"
const labelmotdepasse = document.querySelector('.labelmotdepasse')
// Définir la variable "inputmotdepasse" en sélectionnant la classe "inputmotdepasse"
const inputmotdepasse = document.querySelector('.inputmotdepasse')

// Définir la variable "eyeclosemotdepasse" en sélectionnant la classe "eyeclosemotdepasse"
const eyeclosemotdepasse = document.querySelector('.eyeclosemotdepasse')

// Créer une animation au click sur la classe "inputemail" qui change sa couleur de bordure en vert qui s'applique aussi au texte de la classe "labelemail" et laisse la couleur de la bordure de la classe "inputmotdepasse" en blanc et la couleur du texte de la classe "labelmotdepasse" en blanc
inputemail.addEventListener('click', () => {
    inputemail.style.borderColor = "#59FF00"; labelemail.style.color = "#59FF00";
    inputmotdepasse.style.borderColor = "white"; labelmotdepasse.style.color = "white";
})

// Créer une animation au click sur la classe "inputmotdepasse" qui change sa couleur de bordure en vert qui s'applique aussi au texte de la classe "labelmotdepasse" et laisse la couleur de la bordure de la classe "inputemail" en blanc et la couleur du texte de la classe "labelmotdepasse" en blanc
inputmotdepasse.addEventListener('click', () => {
    inputmotdepasse.style.borderColor = "#59FF00"; labelmotdepasse.style.color = "#59FF00";
    inputemail.style.borderColor = "white"; labelemail.style.color = "white";
})

// Créer une animation au click sur la classe "eyeclosemotdepasse" qui change l'image de "Eye Close" en "Eye Open" et qui rend le texte visible que on clique sur l'icône et inversement
eyeclosemotdepasse.addEventListener ('click', () => {
    if (inputmotdepasse.type = "password") {
        inputmotdepasse.type = "text";
        eyeclosemotdepasse.src = "../IMAGES/Eye Open.png"
    }
    else {
        inputmotdepasse.type = "password";
        eyeclosemotdepasse.src = "../IMAGES/Eye Open.png"
    }
})