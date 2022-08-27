import { navbar } from "../modules/navbar.js";

let navbar_container = document.querySelector("nav");
navbar_container.innerHTML = navbar();

let nav = document.querySelector('nav');

 if (window.scrollY >= 100) {
    nav.classList.add('active_nav');
 } else {
    nav.classList.remove('active_nav');
 }

 window.addEventListener('scroll', () => {
     console.log(window.scrollY)

     if (window.scrollY >= 100) {
         nav.classList.add('active_nav');
     } else {
         nav.classList.remove('active_nav');
     }
 })
