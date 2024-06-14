const typed  = new Typed(".multiple-text", {
    strings: ["Frontend"," Developer" , "Backend","Developer" ,
        "Web Designer"
    ],
    typeSpeed :100,
    typeSpeed :100,
    typeSpeed: 100,
    loop: true
})

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}