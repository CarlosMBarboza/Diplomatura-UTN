const item = document.getElementsByClassName('item');

function cambiarVisibility(numItem){

    const item = item[numItem ];

        if(item.style.visibility == ' '){

            item.style.visibility = 'hidden';

        }else{

            item.style.visibility = ' ';
        }
    
}
function cambiarDisplay(numItem){

    const item = item[numItem ];

        if(item.style.display == ' '){

            item.style.display = 'none';

        }else{

            item.style.display = ' ';
        }
    
}