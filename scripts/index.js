import { navbar } from "../modules/navbar.js";

let navbar_container = document.querySelector("nav");
navbar_container.innerHTML = navbar();

// navbar_container.innerHTML = navbarMediaQurrMedium();


 // Using window.scrollY to bring the variation in the navbar's background
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

 // Using setInterval() to append different texts at the header portion
 let span = document.getElementById("span");

 let spanArr = ['you', 'families', 'caregivers', 'therapists', 'coaches','providers', 'depression', 'employees', 'anxiety'];

 let count = 0;
 setInterval(function(){
     span.innerText = spanArr[count];
     count++;
     if(count>(spanArr.length-1))
     {
         count = 0;
     }
 },1000);

//  Good news --> Slider Effect
const productContainers = [...document.querySelectorAll('.newsCard-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width/2;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})






// =======
// // Using window.scrollY to bring the variation in the navbar's background
// let nav = document.querySelector("nav");

// window.addEventListener("scroll", () => {
//     console.log(window.scrollY);

//     if (window.scrollY >= 100) {
//         nav.classList.add("active_nav");
//     } else {
//         nav.classList.remove("active_nav");
//     }
// });

// // Using setInterval() to append different texts at the header portion
// let span = document.getElementById("span");

// let spanArr = [
//     "you",
//     "families",
//     "caregivers",
//     "therapists",
//     "coaches",
//     "providers",
//     "depression",
//     "employees",
//     "anxiety",
// ];

// let count = 0;
// setInterval(function () {
//     span.innerText = spanArr[count];
//     count++;
//     if (count > spanArr.length - 1) {
//         count = 0;
//     }
// }, 1000);
// >>>>>>> main
