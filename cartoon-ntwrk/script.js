let menuIcon = document.querySelector('.menu-icon');
let closeIcon=document.querySelector('.close');
menuIcon.addEventListener('click',showMenu);
closeIcon.addEventListener('click',closeMenu);

function showMenu(e){
    
    let menuList=document.querySelector('.nav-menu');
    let appMenu = document.querySelector('.app-menu');
    appMenu.style.transform='translateX(550px)';
}

function closeMenu(e){
    let appMenu=document.querySelector('.app-menu');
    let webMenu=document.querySelector('.web-menu')
    appMenu.style.transform='translateX(-550px)';
}