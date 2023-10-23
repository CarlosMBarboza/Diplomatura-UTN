const cuadrado = document.getElementById('cuadrado')[0];

const rojo = document.getElementById('rojo');
const borde = document.getElementById('borde');
const reset = document.getElementById('reset');


rojo.addEventListener('click', () =>{
    cuadrado.classList.add('rojo');
})

borde.addEventListener('click', () =>{
    cuadrado.classList.add('borde');
})

reset.addEventListener('click', () =>{
    cuadrado.classList.remove('rojo', 'borde');
})