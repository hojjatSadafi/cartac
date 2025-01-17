const toggleBtns = document.querySelectorAll('.dark-light-toggle-btn')
let currentState = localStorage.getItem('car-tac-theme')
window.addEventListener('load',()=>{
    if(currentState === 'dark')
    document.documentElement.classList.add('dark')
})
function changeTheme(){
    if(currentState === 'dark'){
        document.documentElement.classList.remove('dark')
        currentState = 'light'
    } else {
        document.documentElement.classList.add('dark')
        currentState = 'dark'
    }
    localStorage.setItem('car-tac-theme',currentState)
}
if(toggleBtns){
    toggleBtns.forEach(toggleBtn=>{
        toggleBtn.addEventListener('click',()=>{
            changeTheme()
        })
    })
}