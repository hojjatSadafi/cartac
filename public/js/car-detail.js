const healthDropDowns = document.querySelectorAll('.healthDropDown')

healthDropDowns.forEach(healthDropDown => {
    healthDropDown.addEventListener('click',()=>{
        healthDropDown.classList.toggle('healthDropDown--active')
        healthDropDown.children[1].classList.toggle('closed')
    })
});