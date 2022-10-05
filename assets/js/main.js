let goUP = document.querySelector(".go-up");
let goDown = document.querySelector(".go-down");
let about = document.querySelector(".about");
let aboutHidden = document.querySelector(".about-hidden");

goDown.addEventListener("click", function(){
    about.classList.remove("active");
    aboutHidden.classList.add("active");
});

goUP.addEventListener("click", function(){
    about.classList.add("active");
    aboutHidden.classList.remove("active");
});