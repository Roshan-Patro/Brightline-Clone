function navbar(){
    return `
    <div class="logo">
        <a href="index.html"><img id= "logo_img" src="https://www.hellobrightline.com/assets/brightline-logo.svg?w=163&h=40&fit=thumb&fm=png&q=90" alt=""></a>
        </div>
        <div>
        <div id="navbarLinksSet">
        <div class="nav_links" id="howItWorks">
            How It Works <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div class="nav_links" id="employers">
            Employers & Plans <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div class="nav_links" id="forFamilies">
            For Families <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div class="nav_links" id="careers">
        Careers <i class="fa-solid fa-chevron-down"></i>
        </div>
        </div>
        <div id="nav_end">
            <button id="loginBtn">Log in</button>
            <button id="signupBtn">Sign up</button>        
        </div>
        </div>`
}

function navbarMediaQurrMedium(){
    return `<div id="uponMedmScreen">
    <div id="mdmScreenNavImg">
        <img src="https://www.hellobrightline.com/assets/brightline-logo.svg?w=163&h=40&fit=thumb&fm=png&q=90" alt="">
    </div>
    <div id="menuBar">
        <i class="fa-solid fa-bars"></i>
    </div>
    </div>`
}

export {navbar};

/* <a href=""><i class="fa-solid fa-bars"></i></a> */