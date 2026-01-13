import contactImage from "./img/contact-img.jpg";

function createContact() {
    const contactHero = document.createElement("div");
    contactHero.classList.add("contact-hero");

    const contactList = document.createElement("div");
    contactList.classList.add("contact-list");

    const contactImg = document.createElement("img");
    contactImg.src = contactImage;

    contactHero.appendChild(contactList);
    contactHero.appendChild(contactImg);

    contactList.appendChild(insertTitle("FIND US"));
    contactList.appendChild(insertHeader("Phone"));
    contactList.appendChild(insertParagraph("(00) 1234 5678"));
    contactList.appendChild(insertHeader("Email"));
    contactList.appendChild(insertParagraph("book@email.com"));
    contactList.appendChild(insertHeader("Address"));
    contactList.appendChild(insertParagraph("123 Food St,"));
    contactList.appendChild(insertParagraph("Deliciousville"));
    contactList.appendChild(insertHeader("Hours"));
    contactList.appendChild(insertParagraph("Sun - Thurs: 5-10PM"));
    contactList.appendChild(insertParagraph("Fri - Sat: 5-10PM"));

    return contactHero;

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



function loadContact() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.appendChild(createContact());
}

export default loadContact; 