const link = document.getElementById('link');


link.addEventListener('click', (e) =>{

    e.preventDefault();

    alert('Quisiste if a :' + e.currentTarget.href)
})