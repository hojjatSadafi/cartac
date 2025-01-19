const headerElem = document.querySelector('.header')
const mobileNav = document.querySelector('.mobile-nav')
const mobileNavCloseBtn = document.querySelector('.mobile-nav__close-btn')
const hamburger = document.querySelector('.hamburger')
const navOverlay = document.querySelector('.nav-overlay')
const popularSectionBtnWrapper = document.getElementById('popularSectionBtnWrapper')
const cardWrapperContainer = document.querySelector('.card-wrapper-container')
const headerDropdownBtn = document.getElementById('header-dropdown-btn')
const headerDropdown = document.querySelector('.header-dropdown')

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
function popularSectionActiveHandler(clickedId){
    let cardWrappers = cardWrapperContainer.children
    cardWrappers = Array.from(cardWrappers)

    cardWrappers.forEach(cardwrapper => {
        cardwrapper.classList.add('closed')
        if(cardwrapper.getAttribute('id')===clickedId){
            cardwrapper.classList.remove('closed')
        }
    });
    
    
}
function clearAllpopularSectionBtnActive(){
    let btns = Array.from(popularSectionBtnWrapper.children)
    btns.forEach(btn=>{
        btn.classList.remove('text-primary')
    })
}
// event

hamburger.addEventListener('click',openMobileNav)
navOverlay.addEventListener('click',closeMobileNav)
mobileNavCloseBtn.addEventListener('click',closeMobileNav)
popularSectionBtnWrapper.addEventListener('click',event=>{
    if(event.target.tagName.toLowerCase()==='span'){
        clearAllpopularSectionBtnActive()
        let clickedElem = event.target;
        let clickedId = clickedElem.dataset.toggleId

        clickedElem.classList.add('text-primary')
        popularSectionActiveHandler(clickedId)
    }
})
headerDropdownBtn.addEventListener('click',()=>{
    headerDropdown.classList.toggle('hide')
})