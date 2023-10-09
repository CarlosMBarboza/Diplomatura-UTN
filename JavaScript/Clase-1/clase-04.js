const num1 = parseInt(prompt('Ingrese un valor 1 ', ' '));
const num2 =parseInt(prompt('Ingrese un valor 2 ', ' '));
const num3 = parseInt(prompt('Ingrese un valor 3 ', ' '));


if(num1 > num2 && num1 > num3){
console.log(`el mayor es ${num1}`)
}else if( num2 > num3 ){
    console.log (`El mayor es ${num2}`);
}else{
    console.log(`${num3}` );
}
