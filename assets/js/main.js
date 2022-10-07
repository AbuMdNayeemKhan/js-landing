let goUP = document.querySelector(".go-up");
let goDown = document.querySelector(".go-down");
let about = document.querySelector(".about");
let aboutHidden = document.querySelector(".about-hidden");

goDown.addEventListener("click", function(){
    let aboutHiddenContent = document.querySelector(".about-hidden-content");
    let aboutLeftAnimation = document.querySelector(".about-left-animation");
    let aboutRightAnimation = document.querySelector(".about-right-animation");
    about.classList.remove("active");
    aboutHidden.classList.add("active");
    aboutHiddenContent.classList.add("animate__fadeInLeft");
    aboutLeftAnimation.classList.add("animate__rotateInDownLeft");
    aboutRightAnimation.classList.add("animate__rotateInDownRight");
});

goUP.addEventListener("click", function(){
    about.classList.add("active");
    aboutHidden.classList.remove("active");
});