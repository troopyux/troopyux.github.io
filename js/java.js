//Constante para cambiar tema Blanco/Negro
const btnTheme = document.querySelector('#switch');

//Constantes para Carrusel de Proyectos
const slider_content = document.querySelectorAll('.slider-content');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

//Codigo para cambiar tema Blanco/Negro
btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnTheme.classList.toggle('active');
});

//Codigo para Carrusel de Proyectos
const mount = () => slider_content[index].classList.add('active');
const unmount = () => slider_content[index].classList.remove('active');
mount();

next.addEventListener('click' , () => {
    unmount();
    if (index >= slider_content.length - 1) {
        index = 0;
    }else{
        index++;
    }
    mount();
})

prev.addEventListener('click' , () => {
    unmount();
    if (index <= 0) {
        index = slider_content.length - 1;
    }else{
        index--;
    }
    mount();
})