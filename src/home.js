import homeImage from "./img/home-img.jpg"

function createHome() {
    const home = document.createElement("div");
    home.classList.add("home-hero");

    const homeImg = document.createElement("img");
    homeImg.src = homeImage;

    home.appendChild(insertTitle("Welcome"));
    home.appendChild(insertHeader("Modern Food. Opulent Dining."));
    home.appendChild(insertParagraph("A refined experience in the heart of the evening."));
    home.appendChild(homeImg);

    return home;
}

function insertParagraph(text){
    const paragraph = document.createElement("p");

    paragraph.textContent = text;
    return paragraph;
}

function insertTitle(text){
    const title = document.createElement("h1");

    title.textContent = text;
    return title;
}

function insertHeader(text){
    const header = document.createElement("h2");

    header.textContent = text;
    return header;
}

function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.appendChild(createHome());
}

export default loadHome; 