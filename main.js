const burger = document.querySelector(".burger");
const menu=document.querySelector(".menu");
const body=document.querySelector("body")


burger.addEventListener("click", function () {
    menu.classList.toggle("active");
})

menu.addEventListener("click", function(){
    menu.classList.remove("active")
} )




