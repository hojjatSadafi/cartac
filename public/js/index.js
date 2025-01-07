const headerElem = document.querySelector('.header')

window.addEventListener('scroll',event=>{
    if(document.documentElement.scrollTop){
        headerElem.classList.add('header--scroll')
    } else {
        headerElem.classList.remove('header--scroll')
    }
    
})