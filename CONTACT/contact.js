// Définir la variable "labelemail" en sélectionnant la classe "labelemail"
const labelemail = document.querySelector('.labelemail')
// Définir la variable "inputemail" en sélectionnant la classe "inputemail"
const inputemail = document.querySelector('.inputemail')

// Définir la variable "labelpseudo" en sélectionnant la classe "labelpseudo"
const labelpseudo = document.querySelector('.labelpseudo')
// Définir la variable "inputpseudo" en sélectionnant la classe "inputpseudo"
const inputpseudo = document.querySelector('.inputpseudo')

// Définir la variable "labelmessage" en sélectionnant la classe "labelmessage"
const labelmessage = document.querySelector('.labelmessage')
// Définir la variable "inputmessage" en sélectionnant la classe "inputmessage"
const inputmessage = document.querySelector('.inputmessage')

// Créer une animation au click sur la classe "inputemail" qui change sa couleur de bordure en vert qui s'applique aussi au texte de la classe "labelemail" et laisse la couleur de la bordure de la classe "inputmotdepasse" et de la classe "inputmessage" en blanc et la couleur du texte de la classe "labelmotdepasse" et de la classe "labelmessage" en blanc
inputemail.addEventListener('click', () => {
    inputemail.style.borderColor = "#59FF00"; labelemail.style.color = "#59FF00";
    inputpseudo.style.borderColor = "white"; labelpseudo.style.color = "white";
    inputmessage.style.borderColor = "white"; labelmessage.style.color = "white";
})

// Créer une animation au click sur la classe "inputpseudo" qui change sa couleur de bordure en vert qui s'applique aussi au texte de la classe "labelmotdepasse" et laisse la couleur de la bordure de la classe "inputemail" et de la classe "inputmessage" en blanc et la couleur du texte de la classe "labelemail" et de la classe "labelmessage" en blanc
inputpseudo.addEventListener('click', () => {
    inputpseudo.style.borderColor = "#59FF00"; labelpseudo.style.color = "#59FF00";
    inputemail.style.borderColor = "white"; labelemail.style.color = "white";
    inputmessage.style.borderColor = "white"; labelmessage.style.color = "white";
})

// Créer une animation au click sur la classe "inputmessage" qui change sa couleur de bordure en vert qui s'applique aussi au texte de la classe "labelmessage" et laisse la couleur de la bordure de la classe "inputmotdepasse" et de la classe "inputemail" en blanc et la couleur du texte de la classe "labelmotdepasse" et de la classe "labelemail" en blanc
inputmessage.addEventListener('click', () => {
    inputmessage.style.borderColor = "#59FF00"; labelmessage.style.color = "#59FF00";
    inputpseudo.style.borderColor = "white"; labelpseudo.style.color = "white";
    inputemail.style.borderColor = "white"; labelemail.style.color = "white";
})

