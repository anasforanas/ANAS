const hamburger = document.querySelector(".menu");
const navLinks = document.querySelector(".links");
const links = document.querySelectorAll("li");

hamburger.addEventListener('click', () => {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});