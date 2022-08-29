let form = document.querySelector("form");
let signup_page=document.querySelector("#signup_page")
let signupls=JSON.parse(localStorage.getItem("signup"))||[]
form.addEventListener("submit",function(e){
    e.preventDefault();
    if(signupls.length==0){
        alert("No user till now");
        return;
    }
    let obj={
        email:form.email.value,
        password:form.password.value,
        
    }
    let flag=false
    signupls.forEach(function(ele){
        if(ele.email==obj.email && ele.password==obj.password )
        {
            flag=true;
            localStorage.setItem("login",JSON.stringify(ele));
            alert("successfully logged in!")
            window.location.href=`index.html`
        }
    })
    if(flag===false){
        alert("Please, Signup first!")
        window.location.href=`signup.html`
    } 
})
signup_page.addEventListener("click",function(){
    window.location.href=`signup.html`
    
})