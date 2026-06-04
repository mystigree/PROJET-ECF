import Route from "./Route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/signin", "Se connecter", "/pages/signin.html"),
    new Route("/signup", "S'inscrire", "/pages/signup.html"),
    new Route("/avatars", "Avatars", "/pages/avatars.html"),
    new Route("/contact", "Contact", "/pages/contact.html"),];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "PixelVerse Studio";