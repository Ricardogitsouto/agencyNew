import criaElementoBAnner from './criaElementoBAnner';
// let elementoBanner = criaElementoBAnner(0);
let banner_equipe = document.querySelector('.container-banner');
let btn_membro = document.querySelectorAll('.btn-member-perfil');


   for (let index = 0; index < btn_membro.length; index++) {
       btn_membro[index].addEventListener('click',function(){

            banner_equipe.innerHTML = criaElementoBAnner(index);
            banner_equipe.style.display = "block"


            //Fecha o Banner
            let fecha_banner = document.querySelector('.top-close');
            fecha_banner.addEventListener('click',function(){
                banner_equipe.style.display = 'none'     
            })
        
           
       })
       
   }
