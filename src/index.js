import "./styles.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

loadHome();
// loadMenu();

const homebtn = document.getElementById("home-btn");
homebtn.addEventListener("click", loadHome)

const menubtn = document.getElementById("menu-btn");
menubtn.addEventListener("click", loadMenu);


const contactbtn = document.getElementById("contact-btn");
contactbtn.addEventListener("click", loadContact);


