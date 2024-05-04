function check_Credintials(){
    let email = document.getElementById("email").value;
    let isTrue = checkEmailValid(email);
}
function checkEmailValid(email){
    const emailVerif = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if(emailVerif.test(email)){
        alert("Email is valid");
    }else{
        alert("Email is not valid");
    }
}