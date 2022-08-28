

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
        dropDownWork.style.visibility = "visible";
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
    // if((countWorks>0) || (countEmp>0) || (countCarr>0))
    // {
        dropDownWork.style.visibility = "hidden";
        dropDownEmp.style.visibility = "hidden";
        dropDownCarr.style.visibility = "hidden";
        dropDownFam.style.visibility = "visible";
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
