import {navbar} from './modules/navbar.js';

let navbar_container = document.querySelector('nav');
navbar_container.innerHTML = navbar();

// navbar_container.innerHTML = navbarMediaQurrMedium();


 // Using window.scrollY to bring the variation in the navbar's background
 let nav = document.querySelector('nav');

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