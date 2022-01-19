document.getElementById("btn_register").addEventListener("click", register);
document.getElementById("btn_login").addEventListener("click", login);
window.addEventListener("resize", anchoPage);

var container_register_login = document.querySelector(".container_register-login");
var form_login = document.querySelector(".form_login");
var form_register = document.querySelector(".form_register");
var container_login = document.querySelector(".container_login");
var container_register = document.querySelector(".container_register");

function anchoPage(){
    if(window.innerWidth > 850){
        container_login.style.display = "block";
        container_register.style.display = "block";
    }else{
        container_register.style.display = "block";
        container_register.style.opacity = "1";
        container_login.style.display = "none";
        form_login.style.display = "block";
        form_register.style.display = "none";
        container_register_login.style.left = "0px";
    }
}

anchoPage();

function login(){
    if(window.innerWidth > 850){
        form_register.style.display = "none";
        container_register_login.style.left = "10px";
        form_login.style.display = "block";
        container_register.style.opacity = "1";
        container_login.style.opacity = "0";
    }
    else{
        form_register.style.display = "none";
        container_register_login.style.left = "0px";
        form_login.style.display = "block";
        container_register.style.display = "block";
        container_login.style.display = "none";
    }
}

function register(){

    if(window.innerWidth > 850){
        form_register.style.display = "block";
        container_register_login.style.left = "410px";
        form_login.style.display = "none";
        container_register.style.opacity = "0";
        container_login.style.opacity = "1";
    }else{  
        form_register.style.display = "block";
        container_register_login.style.left = "0px";
        form_login.style.display = "none";
        container_register.style.display = "none";
        container_login.style.display = "block";
        container_login.style.display = "1";
    }
}
     
