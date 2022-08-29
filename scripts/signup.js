let form=document.querySelector("form")
    
    let signupls=JSON.parse(localStorage.getItem("signup"))||[]
    // let signup_dtails=[]
    form.addEventListener("submit",function(e){
        e.preventDefault();
        let obj={
            email:form.email.value,
            number:form.number.value,
            password:form.password.value,
        }
        if(obj.email ==""|| obj.password==""||obj.number==""){
           
         alert("Field Empty")
         
         return;
        } else{
            signupls.push(obj)
            localStorage.setItem("signup",JSON.stringify(signupls));
            alert("Successfully Signed in!")
            window.location.href=`login.html`
        }
    })