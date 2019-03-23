import dadosWorks from './dadosWorks';
import { log } from 'util';


export default function criaWork(){
    
    let dados_works = dadosWorks()
    let grid_trabalhos = document.querySelector('.grid-trabalhos');   //div que contem os trabalhos 
    
    let monta_work = function(titulo,subtitulo,class_img,url){
        return `<div class="card-work" style= "background-image: ${ url } ">
            <div class="animacao-work">
                <h3>${ titulo }</h3>
                <p>${ subtitulo }</p>
                <i class="far fa-eye fa-3x"></i>
                <i></i>
            </div>
        </div>` 
    }  

    for (let index = 0; index < dados_works.length; index++) {
        let element = dados_works[index];
        grid_trabalhos.innerHTML += monta_work(element.titulo,element.sub_titulo,index,element.url_img);             
    }
    
    // quardando a função monta_work e a variavel grid_trabalhos para reornalas
    let retornos = [monta_work,grid_trabalhos];

    return retornos;
}
criaWork()