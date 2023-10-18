function Parrafos(){
    const allparrafos = document.getElementByTagName('p');

   //console.log(allparrafos);

    const num = allparrafos.length;

   // console.log(num);
    alert(`hay ${num} elementos p en este documentos`)
}

function caja1Parrafos(){
    const caja1=document.getElementById("caja1");

    const caja1p=caja1.getElementsByTagName('p');
    const num = caja1p.length;
    alert(`hay ${num} elementos p en esta caja azul`)
}
function caja2Parrafos(){
    const caja2=document.getElementById("caja2");

    const caja2p=caja2.getElementsByTagName('p');
    const num = caja2p.length;
    alert(`hay ${num} elementos p en esta caja roja `)
}


