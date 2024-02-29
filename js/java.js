const btnTheme = document.querySelector('#switch');

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnTheme.classList.toggle('active');
});
