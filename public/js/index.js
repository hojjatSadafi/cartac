const headerElem = document.querySelector('.header')
const mobileNav = document.querySelector('.mobile-nav')
const mobileNavCloseBtn = document.querySelector('.mobile-nav__close-btn')
const hamburger = document.querySelector('.hamburger')
const navOverlay = document.querySelector('.nav-overlay')

window.addEventListener('scroll',event=>{
    if(document.documentElement.scrollTop){
        headerElem.classList.add('header--scroll')
    } else {
        headerElem.classList.remove('header--scroll')
    }
})

// funcs
function openMobileNav(){
    mobileNav.classList.add('mobile-nav--active')
    navOverlay.classList.remove('hide')
}
function closeMobileNav(){
    mobileNav.classList.remove('mobile-nav--active')
    navOverlay.classList.add('hide')
}

// event

hamburger.addEventListener('click',openMobileNav)
navOverlay.addEventListener('click',closeMobileNav)
mobileNavCloseBtn.addEventListener('click',closeMobileNav)