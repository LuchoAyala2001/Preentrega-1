const btnCarro = document.querySelector('.contadorp');
const todo = document.querySelector('.todo');

btnCarro.addEventListener('click', ()=> {
    todo.classList.toggle('ocultar_carro')
});

const carroDeCompras = document.querySelector('.carro_de_compras');
const agregarProductos = document.querySelector('.agregar_productos');


const listaDeProductos = document.querySelector('.productos');


let todosLosProductos = []

listaDeProductos.addEventListener('click', addProduct => {

   if (addProduct.target.classList.contains('boton_carrito')){
        
    const producto = addProduct.target.parentElement;
    const info = {

        cantidad: 1,
        titulo: producto.querySelector('h2').textContent,
        precio: producto.querySelector('p').textContent,

    };

    const salir = todosLosProductos.some(producto => producto.titulo === info.titulo);
    console.log(salir)
    
    if (salir){
        const productos = todosLosProductos.map(producto => {
            if (producto.titulo === info.titulo){
                producto.cantidad++;
                return producto
            }else{
                return producto
            }
        });
        todosLosProductos = [...productos];
        
    }else{
            todosLosProductos = [...todosLosProductos, info];
        }

    mostrarHtml();
   }
   console.log(todosLosProductos);
})


//funcion

const mostrarHtml = () => {

    agregarProductos.innerHTML=``;

    let total = 0;
    let totalSinProductos = 0;

    todosLosProductos.forEach(producto =>{

        const containerProduct = document.createElement('div');
        containerProduct.classList.add('carro_de_compras');
        
        containerProduct.innerHTML = `
            <div class="compras">

                <span class="cantidad_productos"> ${producto.cantidad} </span>         
                <p class="tipo_de_producto"> ${producto.titulo}  </p>
                <P class="precio_producto">${producto.precio}</P>

            </div>                  

            <i class="fa-solid fa-xmark cruz"></i>
            `;


            agregarProductos.append(containerProduct);
})



};