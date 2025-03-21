const openButton = document.getElementById('abrir')
const navbar = document.getElementById('navbar')

const media = window.matchMedia("(width < 585px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
    const isMobile = e.matches
    console.log(isMobile)
    if(isMobile){
        navbar.setAttribute('innert', '')
    }
    else {
        navbar.removeAttribute('inert')
    }
}

function abrirmenu(){
    navbar.classList.add('show')
    openButton.setAttribute('aria-expanded', 'true')
    navbar.removeAttribute('inert')
}

function fecharmenu(){
    navbar.classList.remove('show')
    openButton.setAttribute('aria-expanded', 'false')
    navbar.setAttribute('inert', '')
}

updateNavbar(media)