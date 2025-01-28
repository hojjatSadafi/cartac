const dropDown = document.getElementById('filterDropdown')
const dropDownResult = document.getElementById('filterDropdownResult')
const dropDownBody = document.getElementById('filterDropdownBody')

const toggleFilterBtn = document.getElementById('toggleFilterBtn')
const filterSection = document.getElementById('filterSection')
const filterMobileClose = document.getElementById('filterMobile-close')
const searchSection = document.getElementById('searchSection')

const brandDropdownBtn = document.getElementById('brand-dropdown-btn')
const brandDropdownContent = document.getElementById('brand-dropdown-content')

const yearDropdownBtn = document.getElementById('year-dropdown-btn')
const yearDropdownContent = document.getElementById('year-dropdown-content')

// funcs

let toggleFilterSection = ()=>{
    filterSection.classList.toggle('md:!hidden')
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
    // desctop
    toggleFilterSection()
    // mobile
    filterSection.classList.add('!bottom-0')
})
// mobile
filterMobileClose.addEventListener('click',()=>{
    filterSection.classList.remove('!bottom-0')
})

brandDropdownBtn.addEventListener('click',()=>{
    brandDropdownContent.classList.toggle('closed')
    brandDropdownBtn.children[1].classList.toggle('rotate-180')
})

yearDropdownBtn.addEventListener('click',()=>{
    yearDropdownContent.classList.toggle('closed')
    yearDropdownBtn.children[1].classList.toggle('rotate-180')
})
