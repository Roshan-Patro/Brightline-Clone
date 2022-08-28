function signup(){
    location.href = "signup.html"
}

function learnMore(){
    let logInData = JSON.parse(localStorage.getItem("login"));
    if (logInData){
        alert("Coming Soon")
    }else{
        location.href = "signup.html"
    }
}


