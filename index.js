const btnCarro = document.querySelector('.carro_icono')
const todo = document.querySelector('.todo')

btnCarro.addEventListener('click', ()=> {
    todo.classList.toggle('ocultar_carro')
})