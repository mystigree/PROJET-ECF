// Définir la variable "labelemail" en sélectionnant la classe "labelemail"
const labelemail = document.querySelector('.labelemail')
// Définir la variable "inputemail" en sélectionnant la classe "inputemail"
const inputemail = document.querySelector('.inputemail')

// Définir la variable "labelpseudo" en sélectionnant la classe "labelpseudo"
const labelpseudo = document.querySelector('.labelpseudo')
// Définir la variable "inputpseudo" en sélectionnant la classe "inputpseudo"
const inputpseudo = document.querySelector('.inputpseudo')

// Définir la variable "labelmotdepasse" en sélectionnant la classe "labelmotdepasse"
const labelmotdepasse = document.querySelector('.labelmotdepasse')
// Définir la variable "inputmotdepasse" en sélectionnant la classe "inputmotdepasse"
const inputmotdepasse = document.querySelector('.inputmotdepasse')

// Définir la variable "labelconfirmationmotdepasse" en sélectionnant la classe "labelconfirmationmotdepasse"
const labelconfirmationmotdepasse = document.querySelector('.labelconfirmationmotdepasse')
// Définir la variable "inputconfirmationmotdepasse" en sélectionnant la classe "inputconfirmationmotdepasse"
const inputconfirmationmotdepasse = document.querySelector('.inputconfirmationmotdepasse')

// Définir la variable "eyeclosemotdepasse" en sélectionnant la classe "eyeclosemotdepasse"
const eyeclosemotdepasse = document.querySelector('.eyeclosemotdepasse')

// Définir la variable "eyecloseconfirmationmotdepasse" en sélectionnant la classe "eyecloseconfirmationmotdepasse"
const eyecloseconfirmationmotdepasse = document.querySelector('.eyecloseconfirmationmotdepasse')

// Créer une animation au click sur la classe "inputemail" qui change sa couleur de bordure en vert qui s'applique aussi au texte de la classe "labelemail" et laisse les propriétés des autres classes d'input et label de la div "informations" en blanc
inputemail.addEventListener('click', () => {
    inputemail.style.borderColor = "#59FF00"; labelemail.style.color = "#59FF00";
    inputpseudo.style.borderColor = "white"; labelpseudo.style.color = "white";
    inputmotdepasse.style.borderColor = "white"; labelmotdepasse.style.color = "white";
    inputconfirmationmotdepasse.style.borderColor = "white"; labelconfirmationmotdepasse.style.color = "white";
})

// Créer une animation au click sur la classe "inputpseudo" qui change sa couleur de bordure en vert qui s'applique aussi au texte de la classe "labelemail" et laisse les propriétés des autres classes d'input et label de la div "informations" en blanc
inputpseudo.addEventListener('click', () => {
    inputpseudo.style.borderColor = "#59FF00"; labelpseudo.style.color = "#59FF00";
    inputemail.style.borderColor = "white"; labelemail.style.color = "white";
    inputmotdepasse.style.borderColor = "white"; labelmotdepasse.style.color = "white";
    inputconfirmationmotdepasse.style.borderColor = "white"; labelconfirmationmotdepasse.style.color = "white";
})

// Créer une animation au click sur la classe "inputmotdepasse" qui change sa couleur de bordure en vert qui s'applique aussi au texte de la classe "labelemail" et laisse les propriétés des autres classes d'input et label de la div "informations" en blanc
inputmotdepasse.addEventListener('click', () => {
    inputmotdepasse.style.borderColor = "#59FF00"; labelmotdepasse.style.color = "#59FF00";
    inputpseudo.style.borderColor = "white"; labelpseudo.style.color = "white";
    inputemail.style.borderColor = "white"; labelemail.style.color = "white";
    inputconfirmationmotdepasse.style.borderColor = "white"; labelconfirmationmotdepasse.style.color = "white";
})

// Créer une animation au click sur la classe "inputconfirmationmotdepasse" qui change sa couleur de bordure en vert qui s'applique aussi au texte de la classe "labelemail" et laisse les propriétés des autres classes d'input et label de la div "informations" en blanc
inputconfirmationmotdepasse.addEventListener('click', () => {
    inputconfirmationmotdepasse.style.borderColor = "#59FF00"; labelconfirmationmotdepasse.style.color = "#59FF00";
    inputpseudo.style.borderColor = "white"; labelpseudo.style.color = "white";
    inputmotdepasse.style.borderColor = "white"; labelmotdepasse.style.color = "white";
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

// Créer une animation au click sur la classe "eyecloseconfirmationmotdepasse" qui change l'image de "Eye Close" en "Eye Open" et qui rend le texte visible que on clique sur l'icône et inversement
eyecloseconfirmationmotdepasse.addEventListener ('click', () => {
    if (inputconfirmationmotdepasse.type = "password") {
        inputconfirmationmotdepasse.type = "text";
        eyecloseconfirmationmotdepasse.src = "../IMAGES/Eye Open.png"
    }
    else {
        inputconfirmationmotdepasse.type = "password";
        eyecloseconfirmationmotdepasse.src = "../IMAGES/Eye Open.png"
    }
})
