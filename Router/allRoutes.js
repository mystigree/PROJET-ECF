import Route from "./Route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "./pages/accueil.html"),
    new Route("/connexion", "Connexion", "/pages/se_connecter.html"),
    new Route("/inscription", "Inscription", "/pages/s_inscrire.html"),
    new Route("/creations", "Créations", "/pages/creations.html"),
    new Route("/contact", "Contact", "/pages/contact.html"),];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "PixelVerse Studio";