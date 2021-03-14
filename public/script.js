window.addEventListener('scroll', ()=>{
    const header = document.querySelector('header')
    header.classList.toggle('new-header', window.scrollY > 50)
    
})

function toogleMenu(){
    const menu = document.querySelector('.toogle')
    const menuPage = document.querySelector('.menu')
    menu.classList.toggle('active')
    menuPage.classList.toggle('active')
}