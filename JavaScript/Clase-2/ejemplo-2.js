const nombre = prompt('Ingrese su nombre', ' ');
const nota = parseInt(prompt('Ingresa su Nota ', ' '));

if(Number.isNaN(nota)){
    document.write(`Hola ${nombre}, ingresaste una nota incorrecta`);

}else if (nota >= 4){
    document.write (`Hola ${nombre}, has aprobado con un promedio de: ${nota}`);
}else{
    document.write (`Lo sentimos ${nombre} , pero no te has aprobado su ${nota}`);
}
