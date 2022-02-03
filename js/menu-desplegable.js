const buton_menu = document.getElementById('buton-menu-barras')
const menu_respon = document.getElementById('menu-responsive')

buton_menu.addEventListener('click',function(ev){
    ev.stopPropagation();
    menu_respon.classList.toggle('menu-activado');
});
document.querySelectorAll(".cabezera__navegador-1_menu").forEach(el=>{
    el.addEventListener("click",function(ev){
        menu_respon.classList.toggle('menu-activado');
    })
})