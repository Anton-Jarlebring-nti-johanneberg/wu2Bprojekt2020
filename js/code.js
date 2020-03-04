function menu(){

    let menu =document.querySelector('.burgerMenu')
    menu.classList.toggle('show')

    let fade =document.querySelector('.fade-layer')
    fade.classList.toggle('visible')
}

let button = document.querySelector(".menu-button")
button.addEventListener("click", menu)

let layer = document.querySelector(".fade-layer")
layer.addEventListener("click", menu)