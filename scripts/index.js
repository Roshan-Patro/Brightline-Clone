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
let howWorks = document.querySelector("#howItWorks");
let emploers = document.querySelector("#employers");
let forFamilies = document.querySelector("#forFamilies");
let careers = document.querySelector("#careers");


let dropDownWork = document.querySelector("#workdrop");
let dropDownEmp = document.querySelector("#emp");
let dropDownFam = document.querySelector("#fam");
let dropDownCarr = document.querySelector("#carr");

let countWorks = 0;
let countEmp = 0; 
let countFam = 0; 
let countCarr = 0; 



function showHowItWorks(){
    // if((countEmp>0) || (countFam>0) || (countCarr>0))
    // {
        dropDownEmp.style.visibility = "hidden";
        dropDownFam.style.visibility = "hidden";
        dropDownCarr.style.visibility = "hidden";
        // if(countWorks%2!==0)
        // {
        //     countWorks++;
        // }
        // dropDownWork.style.visibility = "visible";
        // countWorks++;
        // if(countWorks%2===0)
        // {
        //     dropDownWork.style.visibility = "visible";
        // }
        // else{
        //     dropDownWork.style.visibility = "hidden";
        // }
    // }
    // else{
        if(countWorks%2===0)
        {
            dropDownWork.style.visibility = "visible";
        }
        else{
            dropDownWork.style.visibility = "hidden";
        }
        countWorks++;
    // }
}


// Emploers


function showEmployers()
{
    // if((countWorks>0) || (countFam>0) || (countCarr>0))
    // {
        dropDownWork.style.visibility = "hidden";
        dropDownFam.style.visibility = "hidden";
        dropDownCarr.style.visibility = "hidden";
        dropDownEmp.style.visibility = "visible";
        // countEmp++;
        // if(countEmp%2===0)
        // {
        //     dropDownEmp.style.visibility = "visible";
        // }
        // else{
        //     dropDownEmp.style.visibility = "hidden";
        // }
    // }
    // else{
        if(countEmp%2===0)
    {
        dropDownEmp.style.visibility = "visible";
    }
    else{
        dropDownEmp.style.visibility = "hidden";
    }
    countEmp++;
    // }
    

}

// // For families


function showforFamilies()
{
    // if((dropDownWork.style.visibility = "visible") || (dropDownEmp.style.visibility = "visible") || (dropDownCarr.style.visibility = "visible"))
    // {
    //     dropDownWork.style.visibility = "hidden";
    //     dropDownEmp.style.visibility = "hidden";
    //     dropDownCarr.style.visibility = "hidden";
    // }
    // if(countFam%2===0)
    // {
    //     dropDownFam.style.visibility = "visible";
    // }
    // else{
    //     dropDownFam.style.visibility = "hidden";
    // }
    // countFam++;

    // if((countWorks>0) || (countEmp>0) || (countCarr>0))
    // {
        // dropDownWork.style.visibility = "hidden";
        // dropDownEmp.style.visibility = "hidden";
        // dropDownCarr.style.visibility = "hidden";
        // dropDownFam.style.visibility = "visible";
        // countFam++;
        // if(countFam%2===0)
        // {
        //     dropDownFam.style.visibility = "visible";
        // }
        // else{
        //     dropDownFam.style.visibility = "hidden";
        // }
    // }
    // else{
        if(countFam%2===0)
    {
        dropDownFam.style.visibility = "visible";
    }
    else{
        dropDownFam.style.visibility = "hidden";
    }
    countFam++;
    // }
    
}

// // Careers


function showCareers()
{
    // if(countWorks>0 || countEmp>0 || countFam>0)
    // {
    //     dropDownWork.style.visibility = "hidden";
    //     dropDownEmp.style.visibility = "hidden";
    //     dropDownFam.style.visibility = "hidden";
    //     dropDownCarr.style.visibility = "visible";
        // countCarr++;
        // if(countCarr%2===0)
        // {
        //     dropDownCarr.style.visibility = "visible";
        // }
        // else{
        //     dropDownCarr.style.visibility = "hidden";
        // }
    // }
    // else{
        if(countCarr%2===0)
    {
        dropDownCarr.style.visibility = "visible";
    }
    else{
        dropDownCarr.style.visibility = "hidden";
    }
    countCarr++;
    // }
    
}

howWorks.addEventListener("click", showHowItWorks);
emploers.addEventListener("click", showEmployers);
forFamilies.addEventListener("click", showforFamilies);
careers.addEventListener("click", showCareers);


// Linking signup page with signup button signupBtn
document.querySelector("#signupBtn").addEventListener("click",function(){
    location.href = "signup.html";
})

// Linking login page with login button
document.querySelector("#loginBtn").addEventListener("click",function(){
    location.href = "login.html";
})

// Join Today Button

let logInData = JSON.parse(localStorage.getItem("login"));

let jointodayBtn = document.querySelector("#jointodayBtn");
jointodayBtn.addEventListener("click", function(){
    location.href = "login.html";
})

let businessBtn = document.querySelector("#businessBtn");
businessBtn.addEventListener("click", goToBusiness);


function goToBusiness(){
    if(logInData!==null)
    {
        location.href = "https://www.hellobrightline.com/employers";
    }
    else{
        alert("Kindly please, Log in first!");
    }
} 


let VirtualCareBtn = document.querySelector("#VirtualCareBtn");
VirtualCareBtn.addEventListener("click", function(){
        location.href = "signup.html";
}) 

let rightCareBtn = document.querySelector("#rightCareBtn");
rightCareBtn.addEventListener("click", function(){
    location.href = "login.html";
}) 

let readMoreBtn = document.querySelectorAll(".readMore");
readMoreBtn.forEach(function(ele){
ele.addEventListener("click", function(){
    if(logInData!==null)
    {
        location.href = "https://www.businessinsider.com/startup-founders-mental-health-stress-economy-funding-2022-7?IR=T";
    }
    else{
        alert("Kindly please, Log in first!");
    }
});
});
    







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
