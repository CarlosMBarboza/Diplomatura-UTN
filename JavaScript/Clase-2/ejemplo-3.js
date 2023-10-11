const valor = parseInt(prompt('Ingrese un valor entre 1 y 5 ', ' '));

switch(valor){
    case 1:
        document.write('soy el 1')
        break;
    case 2:
        document.write('soy el 2')
        break;
    case 3:
        document.write('soy el 3')
        break;
    case 4:
        document.write('soy el 4')
        break;
    case 5:
        document.write('soy el 5')
        break;
    default:
            document.write("No es valido")
            break;
}