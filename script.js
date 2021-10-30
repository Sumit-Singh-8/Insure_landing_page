
const add = () => {
    menu_bar.classList.toggle("menu-active");
    if(close.style.display == "none"){
        close.style.display = "block";
        open.style.display = "none";
    }
    else{
        close.style.display = "none";
        open.style.display = "block";

    }
}
let close = document.querySelector("#close")
let open = document.querySelector("#open")
let menu_bar = document.querySelector(".menu");
let menu_open = document.querySelector(".menu-btn");
menu_open.addEventListener("click", add);