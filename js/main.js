let nav = document.querySelectorAll('.profile-navigation > a')
let nav_text = document.querySelectorAll('.nav-text')
let open_nav = document.querySelector('.open-nav')
let sidebar = document.querySelector('.left-sidebar')

for (let s = 0; s < nav_text.length; s++) {
    nav_text[s].style.display = 'none'
}

open_nav.addEventListener('click', (e)=> {
    if (open_nav.classList.contains('check') == false) {
        open_nav.classList.add('check')
        sidebar.classList.add('nav-width')

    } else if (open_nav.classList.contains('check')){ 
        open_nav.removeAttribute('class')
        open_nav.setAttribute('class', 'open-nav')
        sidebar.classList.remove('nav-width')
    }

    if (open_nav.classList.contains('check')) {
        for (let h = 0; h < nav_text.length; h++) {
            nav_text[h].style.display = 'block'
        }
    } else {
        for (let s = 0; s < nav_text.length; s++) {
            nav_text[s].style.display = 'none'
        }
    }
})

let message_button = document.querySelector('.message-header')
let logist_button = document.querySelector('.logist-header')
let tovar_button = document.querySelector('.tovar-header')
let sklad_button = document.querySelector('.sklad-header')
let drop_menu = document.querySelectorAll('.drop-menu')

let adm_button = document.querySelector('.admin-button > div')

document.addEventListener('click', function(e){
    if (e.target.classList.contains('message-header') === adm_button.classList.contains('message-header')) {
        drop_menu[0].style.display = 'block'
        console.log(e.target)
    } else {
        drop_menu[0].removeAttribute('style')
    }
    if (e.target === logist_button) {
        drop_menu[1].style.display = 'block'
    } else {
        drop_menu[1].removeAttribute('style')
    }
    if (e.target === tovar_button) {
        drop_menu[2].style.display = 'block'
    } else {
        drop_menu[2].removeAttribute('style')
    }
    if (e.target === sklad_button) {
        drop_menu[3].style.display = 'block'
    } else {
        drop_menu[3].removeAttribute('style')
    }
})