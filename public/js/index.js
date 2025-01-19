const popularSectionBtnWrapper = document.getElementById('popularSectionBtnWrapper')
const cardWrapperContainer = document.querySelector('.card-wrapper-container')

// funcs

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


popularSectionBtnWrapper.addEventListener('click',event=>{
    if(event.target.tagName.toLowerCase()==='span'){
        clearAllpopularSectionBtnActive()
        let clickedElem = event.target;
        let clickedId = clickedElem.dataset.toggleId

        clickedElem.classList.add('text-primary')
        popularSectionActiveHandler(clickedId)
    }
})
