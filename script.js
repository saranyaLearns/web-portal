const btn=document.getElementsByClassName('btn')[0];
const menu=document.getElementsByClassName('menu')[0];

btn.addEventListener('click',()=>{
    menu.classList.toggle('active');
});