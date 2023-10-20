const form = document.getElementById('form');

form.addEventListener('submit', function(e) {

    e.preventDefault();  //evita que el form se recargue la pagina al enviar los datos

    if(e.currentTarget.nombre.value ==  ''){

        alert("Debes ingresar un nombre");

        return;

    }
})


