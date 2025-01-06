const healthDropDowns = document.querySelectorAll('.healthDropDown')
const mainCarImg = document.getElementById('mainCarImg')
const subImageWrapper = document.querySelector('.subImage-wrapper')
const modalCloseBtn = document.getElementById('modal-close-btn')
const carImagesModal = document.querySelector('.car-images-modal')
const overlay = document.querySelector('.overlay')
const modalTitles = document.querySelectorAll('.modal-title')


// funcs
function showModal(){
    carImagesModal.classList.remove('hide')
    overlay.classList.remove('hide')
    document.body.classList.add('overflow-hidden')
}
function closeModal(){
    carImagesModal.classList.add('hide')
    overlay.classList.add('hide')
    document.body.classList.remove('overflow-hidden')
}
function hideAllModalTitleActive(){
    modalTitles.forEach(modalTitle=>{
        modalTitle.classList.remove('modal-title--active')
    })
}

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

modalCloseBtn.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)
mainCarImg.addEventListener('click',showModal)
modalTitles.forEach(modalTitle=>{
    modalTitle.addEventListener('click',event=>{
        hideAllModalTitleActive()
        event.target.classList.add('modal-title--active')
    })
})