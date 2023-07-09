const botao =document.querySelector('.menu_hamburgue');

const imagemhamburgue = 'url(../img/menu-hamburguer.svg)'
const imagemfecha = 'url(../img/cruz.svg)'
botao.addEventListener('click', ()=>{
    const lista = document.querySelector('.menu_nav')
    lista.classList.contains('.nav-ativa') 
    ?botao.style.backgroundImage = imagemhamburgue 
    :botao.style.backgroundImage = imagemfecha 
    lista.classList.toggle('nav-ativa')
    ?botao.style.backgroundImage = imagemfecha 
    :botao.style.backgroundImage = imagemhamburgue 
})

