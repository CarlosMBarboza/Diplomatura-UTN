const alternar = document.getElementById('alternar')[0];
alternar.addEventLiostener('click', (e)=>{
    e.currentTarget.classList.toggle('activado')
})
