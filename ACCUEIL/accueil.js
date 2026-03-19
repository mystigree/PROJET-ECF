// Définir la variable "partie1" en sélectionnant la classe "Qui Sommes Nous"
const partie1 = document.querySelector('.Qui_Sommes_Nous')
// Définir la variable "partie2" en sélectionnant la classe "FantasyReaml Online"
const partie2 = document.querySelector('.FantasyRealm_Online')
// Définir la variable "partie3" en sélectionnant la classe "Qu'est ce qu'on propose"
const partie3 = document.querySelectorAll('.Qu_est_ce_qu_on_propose')

// Créer une animation au scroll de la souris sur la fenêtre entière en définissant la condition de si nôtre position sur la fenêtre est au-dessus de 200 pixels, alors le contenu de la première partie s'affichera à une opacité de 100% 
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        partie1.style.opacity = "100%";
    }
})

// Créer une animation au scroll de la souris sur la fenêtre entière en définissant la condition de si nôtre position sur la fenêtre est au-dessus de 600 pixels, alors le contenu de la deuxième partie s'affichera à une opacité de 100%
window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        partie2.style.opacity = "100%";
    }
})

// Créer une animation au scroll de la souris sur la fenêtre entière en définissant la condition de si nôtre position sur la fenêtre est au-dessus de 1200 pixels, alors le contenu de la troisième partie s'affichera à une opacité de 100%
window.addEventListener('scroll', () => {
    if (window.scrollY > 1200) {
        partie3.forEach(part => part.style.opacity = "100%");
    }
})



        