var btn_saludar = document.getElementById('btn_saludar');
var msj = document.querySelector('.msj');
var nombre = document.getElementById('campo_nombre');


btn_saludar.addEventListener('click',function(){

    let nombre_ref = nombre;
    nombre_ref = nombre_ref.value;

    if(nombre_ref.trim() != ""){
        msj.innerHTML = nombre;
    }else {
        alert('No has escrito un nombre');
    }

})



