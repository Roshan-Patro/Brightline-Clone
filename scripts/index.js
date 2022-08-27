import { navbar } from "../modules/navbar.js";

let navbar_container = document.querySelector("nav");
navbar_container.innerHTML = navbar();

// navbar_container.innerHTML = navbarMediaQurrMedium();


 // Using window.scrollY to bring the variation in the navbar's background
 let nav = document.querySelector('nav');

 changenavBack();

 window.addEventListener('scroll', changenavBack);
 function changenavBack()
 {
     if (window.scrollY >= 100) {
         nav.classList.add('active_nav');
     } else {
         nav.classList.remove('active_nav');
     }
 }

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


// making navbar dropdowns work
// How it works
// let countHowItWorks = 0;

// var parentDropDown = document.querySelector(".drop");
// parentDropDown.onclick = function(){
//     console.log(1);
// }
let countWorks = 0;
let dropDownWork = document.querySelector("#workdrop");
let howWorks = document.querySelector("#howItWorks");
howWorks.addEventListener("click", function(){
    if(countWorks%2===0)
    {
        dropDownWork.style.visibility = "visible";
    }
    else{
        dropDownWork.style.visibility = "hidden";
    }
    countWorks++;
});


// Emploers
let countEmp = 0; 
let dropDownEmp = document.querySelector("#emp");
let emploers = document.querySelector("#employers");
emploers.addEventListener("click", showEmployers);


function showEmployers()
{
    if(countEmp%2===0)
    {
        dropDownEmp.style.visibility = "visible";
    }
    else{
        dropDownEmp.style.visibility = "hidden";
    }
    countEmp++;
}

// For families
let countFam = 0; 
let dropDownFam = document.querySelector("#fam");
let forFamilies = document.querySelector("#forFamilies");
forFamilies.addEventListener("click", showforFamilies);


function showforFamilies()
{
    if(countFam%2===0)
    {
        dropDownFam.style.visibility = "visible";
    }
    else{
        dropDownFam.style.visibility = "hidden";
    }
    countFam++;
}

// Careers
let countCarr = 0; 
let dropDownCarr = document.querySelector("#carr");
let careers = document.querySelector("#careers");
careers.addEventListener("click", showCareers);


function showCareers()
{
    if(countCarr%2===0)
    {
        dropDownCarr.style.visibility = "visible";
    }
    else{
        dropDownCarr.style.visibility = "hidden";
    }
    countCarr++;
}

// Linking signup page with signup button signupBtn
document.querySelector("#signupBtn").addEventListener("click",function(){
    location.href = "signup.html";
})

// Linking login page with login button
document.querySelector("#loginBtn").addEventListener("click",function(){
    location.href = "login.html";
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
