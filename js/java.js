function desplegar(){
    console.log('este boton funca');
    var ancla = document.getElementsByClassName('aparece');
    for(var i = 0; i< ancla.length; i++){
        ancla[i].classList.toggle('aparece');
    }
}
