const menu=document.querySelector('.menu_btn');
const navbar=document.querySelector('.navbar');

menu.addEventListener('click', function(){
    navbar.classList.toggle('active');
})

