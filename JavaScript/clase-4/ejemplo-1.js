const boton = document.getElementById('boton');

boton.addEventListener('click', function( f ){

    alert(f.currentTarget.innerText);

})