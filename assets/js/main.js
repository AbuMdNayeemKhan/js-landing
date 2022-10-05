let goUP = document.querySelector(".go-up");
let goDown = document.querySelector(".go-down");
let about = document.querySelector(".about");
let aboutHidden = document.querySelector(".about-hidden");

goDown.addEventListener("click", function(){
    about.classList.add("d-none");
    aboutHidden.classList.remove("d-none");
});

goUP.addEventListener("click", function(){
    about.classList.remove("d-none");
    aboutHidden.classList.add("d-none");
});