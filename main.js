let menu = document.getElementById('menu');
let nav = document.getElementById('nav');
let nav_conn = document.querySelectorAll('#nav > div')[0];
let check_menu = true;

menu.addEventListener('click', () =>{
    check_menu = !check_menu;
 
    if(check_menu && window.innerWidth < 1023){
        nav.style.opacity = 0;
        nav.style.height = 0 + 'px';
    }else{
        nav.style.opacity = 1;
        nav.style.height = (nav_conn.clientHeight + 50) + 'px';
    }
})

window.onresize = function(){
   if(window.innerWidth > 768){
    nav.style.opacity = 1;
    nav.style.height =  (nav_conn.clientHeight + 50) + 'px';
   }
}