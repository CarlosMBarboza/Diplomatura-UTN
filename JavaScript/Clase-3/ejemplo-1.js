function validarFrom(){
    const nombreValidado = true;
    const passWordValidado = validarLargo(document.form1.text1.value, 5);


    const resultado = nombreValidado && passWordValidado;

    if(resultado){
        alert("Formulario valido");
    }else{
        alert("Favor de llenar los campos correctamente")
    }
}

function validarLargo(texto, largoRequerido){
    return texto.length >= largoRequerido;
}