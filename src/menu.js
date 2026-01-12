import menuImage from "./img/menu-img.jpg";

function createMenu() {
    const menuHero = document.createElement("div");
    menuHero.classList.add("menu-hero");

    const menuList = document.createElement("div");
    menuList.classList.add("menu-list");

    const menuImg = document.createElement("img");
    menuImg.src = menuImage;

    menuHero.appendChild(menuList);
    menuHero.appendChild(menuImg);

    menuList.appendChild(insertTitle("Menu"));
    menuList.appendChild(insertHeader("Appetiser"));
    menuList.appendChild(insertParagraph("Homemade FOCCACIA"));
    menuList.appendChild(insertHeader("Entrée"));
    menuList.appendChild(insertParagraph("MOZZARELLA di bufala, heritage tomatoes, flat leaf rocket & caper"));
    menuList.appendChild(insertHeader("Main Course"));
    menuList.appendChild(insertParagraph("EYE FILLET Rossini, truffled spinach, foie gras parfait & Madeira sauce"));
    menuList.appendChild(insertHeader("Dessert"));
    menuList.appendChild(insertParagraph("FIG LEAF ICE CREAM, yellow peach, blueberry & lemon baba"));

    return menuHero;

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


function insertParagraph(text){
    const paragraph = document.createElement("p");

    paragraph.textContent = text;
    return paragraph;
}



function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.appendChild(createMenu());
}

export default loadMenu; 