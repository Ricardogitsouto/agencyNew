import criaWork from './criaWork';
import dadosWorks from './dadosWorks';

let itens_workd = document.querySelectorAll(".itens-works");

for (let x = 0; x < itens_workd.length; x++) {
    itens_workd[x].addEventListener("click",()=>{

        

        let dados_works = dadosWorks();
        let monta_card = criaWork()[0]     
        let grid_trabalhos = criaWork()[1];

        grid_trabalhos.innerHTML = "";
        

        for (let index = 0; index < dados_works.length; index++) {
            const element = dados_works[index];          

            if (element.tipo == itens_workd[x].textContent) {
                grid_trabalhos.innerHTML +=  monta_card(element.titulo,element.sub_titulo,index,element.url_img)
                
            }else if(itens_workd[x].textContent == "todos"){
                    grid_trabalhos.innerHTML +=  monta_card(element.titulo,element.sub_titulo,index,element.url_img)
            }            
        }
    })   
}