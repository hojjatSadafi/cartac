const dropDown = document.getElementById('filterDropdown')
const dropDownResult = document.getElementById('filterDropdownResult')
const dropDownBody = document.getElementById('filterDropdownBody')

const toggleFilterBtn = document.getElementById('toggleFilterBtn')
const filterSection = document.getElementById('filterSection')
const searchSection = document.getElementById('searchSection')
// funcs
let toggleFilterSection = ()=>{
    filterSection.classList.toggle('!hidden')
    searchSection.classList.toggle('!col-span-full')
    toggleFilterBtn.classList.toggle('!rounded-full')
    toggleFilterBtn.children[0].classList.toggle('!w-0')
    toggleFilterBtn.children[1].classList.toggle('!-rotate-90')
}
// listeners
dropDown.addEventListener('click',()=>{
    dropDownBody.classList.toggle('hide')
    dropDown.children[1].classList.toggle('rotate-180')
})

dropDownBody.addEventListener('click',event=>{
    if(event.target.tagName.toLowerCase() === 'span'){
        dropDownResult.innerHTML = event.target.innerHTML
        dropDownBody.classList.add('hide')
        dropDown.children[1].classList.remove('rotate-180')
    }
    
})

toggleFilterBtn.addEventListener('click',()=>{
    toggleFilterSection()
})

