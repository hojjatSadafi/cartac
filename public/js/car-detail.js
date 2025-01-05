const healthDropDowns = document.querySelectorAll('.healthDropDown')
const mainCarImg = document.getElementById('mainCarImg')
const subImageWrapper = document.querySelector('.subImage-wrapper')


// funcs


// events
healthDropDowns.forEach(healthDropDown => {
    healthDropDown.addEventListener('click',()=>{
        healthDropDown.classList.toggle('healthDropDown--active')
        healthDropDown.children[1].classList.toggle('closed')
    })
});

subImageWrapper.addEventListener('click',event=>{
    if(event.target.tagName.toLowerCase()==='img'){
      mainCarImg.setAttribute('src',event.target.src)
      scrollTo(0,0)
    }
})