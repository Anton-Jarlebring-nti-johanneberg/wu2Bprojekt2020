function menu(){
    
    let menu =document.querySelector('#burgerMenu')
    menu.classList.toggle('show')

    let fade =document.querySelector('.fadeLayer')
    fade.classList.toggle('visible')
}

let button = document.querySelector(".menu")
button.addEventListener("click", menu)

let layer = document.querySelector(".fadeLayer")
layer.addEventListener("click", menu)