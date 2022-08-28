
document.querySelector("get_started").addEventListener("click",function(){
    let logInData = JSON.parse(localStorage.getItem("login"));
    if(logInData!==null)
    {
        location.href = "https://www.hellobrightline.com/employers";
    }
    else{
        alert("Kindly please, Log in first!");
    }
})
function clickBtn(){
    let logInData = JSON.parse(localStorage.getItem("login"));
    if(logInData!==null)
    {
        location.href = "https://www.hellobrightline.com/employers";
    }
    else{
        alert("Kindly please, Log in first!");
    }
}
