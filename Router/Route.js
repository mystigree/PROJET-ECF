export default class Route {
    constructor(url, title, pathHTML, authorize, pathJS ="") {
        this.url = url;
        this.title = title;
        this.pathHTML = pathHTML;
        this.pathJS = pathJS;
        this.authorize = authorize;
    }
}