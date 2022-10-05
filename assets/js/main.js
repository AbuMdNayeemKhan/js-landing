let goUP = document.querySelector(".go-up");
let goDown = document.querySelector(".go-down");
let about = document.queryCommandIndeterm(".about");
let aboutHidden = document.queryCommandIndeterm(".about-hidden");

goDown.addEventListener("click", function(){
    about.classList.add("d-none");
});