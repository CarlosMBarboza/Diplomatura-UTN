const items = document.getElementsByClassName('item');

for(let i =0; i< items.length; i++){
    items[i].style = 'color:blue; padding-left: ' + (10 * i) + 'px';
}