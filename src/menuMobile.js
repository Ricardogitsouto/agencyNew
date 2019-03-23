(function() {
 let container_menu_responsivo = document.querySelector('.container-menu-responsivo');
 let links_menu = document.querySelectorAll('.item-lista');
 let icon_hamburger = document.querySelector('.icon-hamburger');


 let menuMobileOpen = false;
    


    icon_hamburger.addEventListener('click',function(){
    
    open_closed(menuMobileOpen)
    menuMobileOpen = !menuMobileOpen;
    
    })

    function open_closed(menu_aberto){
        if(menu_aberto){       
            container_menu_responsivo.style.right = "-685px"        
        }else{
            container_menu_responsivo.style.right = "0"       
        }
    }

    links_menu.forEach((x)=>{
        x.addEventListener('click',()=>{
            container_menu_responsivo.style.right = "-685px"
        menuMobileOpen = false;
        })
    })



})()
    
