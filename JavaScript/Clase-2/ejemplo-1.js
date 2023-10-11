

mes = parseInt(prompt('Ingrese mes en numeros', ''))

if( mes == 1 || mes == 2 || mes == 3 ){
    document.write('Primer trimestre del año')
}else if( mes == 4 || mes == 5 || mes == 6 ){
    document.write('Segundo trimestre del año')
}else if( mes == 7 || mes == 8 || mes == 9 ){
    document.write('Tercer trimestre del año')
}else{
     document.write('Cuarto  trimestre del año')
}
