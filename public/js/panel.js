const panelNavWrapper = document.getElementById('panel-nav-wrapper')
const panelNavs = document.querySelectorAll('.panel-nav')
const tableContainer = document.getElementById('tableContainer')
// func
function removeAllPanelNavActive(){
    panelNavs.forEach(panelNav=>{
        panelNav.classList.remove('panel-nav--active')
    })
}
function showTable(TID){
    let tableContainerChidrenArr = Array.from(tableContainer.children)
    tableContainerChidrenArr.forEach(table=>{
        table.classList.add('hidden')
        if(table.getAttribute('id')==TID){
            table.classList.remove('hidden')
        }
    })
}

// listiners
panelNavWrapper.addEventListener('click',event=>{
    if(event.target.tagName.toLowerCase() === "span"){
        removeAllPanelNavActive()
        event.target.classList.add('panel-nav--active')
        showTable(event.target.dataset.content)
    }
})