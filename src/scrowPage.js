let links_menu = document.querySelectorAll('.item-lista');
let cabecarioTop = document.querySelector('.cabecario').offsetTop; 
let agenciaTop = document.querySelector('.agencia').offsetTop;
let equipeTop = document.querySelector('.equipe').offsetTop;
let servicoTop = document.querySelector('.servicos').offsetTop;
let portfolioTop = document.querySelector('.portfolio').offsetTop;
let contatoTop = document.querySelector('.contato').offsetTop;


let container_menu_responsivo = document.querySelector('.container-menu-responsivo');


links_menu.forEach(function(item){
    item.addEventListener("click",function(){
      event.preventDefault()

  
      switch(item.textContent) {
          case "Home":
          window.scrollTo({
              top: cabecarioTop,
              behavior: 'smooth'
          });
        break;

            case "agência":
                window.scrollTo({
                    top: agenciaTop,
                    behavior: 'smooth'
                });
              break;
              
              case "equipe":
              window.scroll({
                  top: equipeTop,
                  behavior: 'smooth'
              });
            break;

            case "serviços":
              window.scroll({
                  top: servicoTop,
                  behavior: 'smooth'
              });
            break;

            case "portfólio":
              window.scroll({
                  top: portfolioTop,
                  behavior: 'smooth'
              });
            break;

            case "contato":
              window.scroll({
                  top: contatoTop,
                  behavior: 'smooth'
              });
            break;
          }
        
    })
    
})