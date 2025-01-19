const headerElem = document.querySelector('.header')
const mobileNav = document.querySelector('.mobile-nav')
const mobileNavCloseBtn = document.querySelector('.mobile-nav__close-btn')
const hamburger = document.querySelector('.hamburger')
const navOverlay = document.querySelector('.nav-overlay')
const headerDropdownBtn = document.getElementById('header-dropdown-btn')
const headerDropdown = document.querySelector('.header-dropdown')


window.addEventListener('scroll',event=>{
    if(document.documentElement.scrollTop){
        headerElem.classList.add('header--scroll')
    } else {
        headerElem.classList.remove('header--scroll')
    }
})

function openMobileNav(){
    mobileNav.classList.add('mobile-nav--active')
    navOverlay.classList.remove('hide')
}
function closeMobileNav(){
    mobileNav.classList.remove('mobile-nav--active')
    navOverlay.classList.add('hide')
}

hamburger.addEventListener('click',openMobileNav)
navOverlay.addEventListener('click',closeMobileNav)
mobileNavCloseBtn.addEventListener('click',closeMobileNav)
headerDropdownBtn.addEventListener('click',()=>{
    
    headerDropdown.classList.toggle('hide')
    headerDropdownBtn.children[2].classList.toggle('rotate-180')

    if(!headerDropdown.classList.contains('hide')){
        setTimeout(() => {
            headerDropdown.classList.add('hide')
            headerDropdownBtn.children[2].classList.remove('rotate-180')
        }, 10000);
    }
})