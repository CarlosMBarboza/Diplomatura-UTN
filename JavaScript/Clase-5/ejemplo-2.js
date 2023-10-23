const item = document.getElementByIdclassName('item');

function cambiarVisibilidad(){
    const item = item[1];
    if(item.style.visibility == ''){
        item.style.visibility = 'hidden';
}else{
    item.style.visibility = '';
    }
}

setInterval (cambiarVisibilidad, 1000);