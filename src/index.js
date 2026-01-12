import "./styles.css";
import loadHome from "./home";
import loadMenu from "./menu";

loadHome();
// loadMenu();

const homebtn = document.getElementById("home-btn");
homebtn.addEventListener("click", loadHome)

const menubtn = document.getElementById("menu-btn");
menubtn.addEventListener("click", loadMenu);
console.log(menubtn)

const contactbtn = document.getElementsByID("contact-btn");


