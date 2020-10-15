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