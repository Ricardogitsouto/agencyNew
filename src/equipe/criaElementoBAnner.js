import dadosMembroEquipe from './dadosMembroEquipe';
// import abreFechaBanner from './abreFechaBanner';


let membro = dadosMembroEquipe();


export default function criaElementoBAnner(number){
    let elemeto =  document.querySelector('.container-banner').innerHTML = `
    <div class="top-close">
        <span style = "color: red" class="bt-close"><i class="fas fa-times-circle fa-1x"></i> fechar</span>
    </div>

    <section class="box-interno-banner">          
    <h2 class="nome-membro-equipe">${ membro[number].nome }</h2>
    <p class="proficao"> ${ membro[number].proficao } </p>

        <div class="conteudo-principal-banner-equipe">

            <div class="foto-e-social">
                <figure>
                    <img src="${ membro[number].srcImg }" alt="foto-membro-equipe">
                </figure>
                <ul class = "menu-links">
                    <li><a href="#"><i class="fab fa-facebook-square fa-2x icon"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter-square fa-2x icon"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram fa-2x icon"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin fa-2x icon"></i></a></li>
                </ul>
            </div>

            <div class="informacoes-pessoais">

            <div class="biografia">
                <h2 class="titulo-curriculo">biografia</h2>
                <p>${ membro[number].biografia }</p>
            </div>

            <div class="formacao">
                <h2 class="titulo-curriculo">formação</h2>
                <p>${ membro[number].formacao }</p>
            </div>

            <div class="experiencia">
                <h2 class="titulo-curriculo">experiência</h2>                
                <h3>${ membro[number].experiencia.primeiraExperiencia.data }</h3>
                <p>${ membro[number].experiencia.primeiraExperiencia.nome }</p>
                <p>${ membro[number].experiencia.primeiraExperiencia.cargo }</p>

                <h3>10/2017</h3>
                <p>nome da empresa</p>
                <p>programador front-end</p>

                <h3>10/2017</h3>
                <p>nome da empresa</p>
                <p>programador front-end</p>
            </div>

            <div class="habilidades">

                <h2 class="habilidade-titulo">HABILIADDES</h2>
                <ul>
                    <li>
                        <h2 class="habilidade-nome">${ membro[number].habilidades[0].nome }<span class="porcentagem">${ membro[number].habilidades[0].nivel }</span></h2>
                        <div  class="tarja-completa-borda">
                            <div class="tarja-conhecimento-porcentagem" style = "width: ${ membro[number].habilidades[0].nivel }"></div>
                        </div>
                        
                    </li>

                    <li>
                        <h2 class="habilidade-nome">${ membro[number].habilidades[1].nome }<span class="porcentagem">${ membro[number].habilidades[1].nivel }</span></h2>
                        <div  class="tarja-completa-borda">
                            <div class="tarja-conhecimento-porcentagem" style = "width: ${ membro[number].habilidades[1].nivel }"></div>
                        </div>
                        
                    </li>

                    <li>
                        <h2 class="habilidade-nome">${ membro[0].habilidades[2].nome }<span class="porcentagem">${ membro[0].habilidades[2].nivel }</span></h2>
                        <div  class="tarja-completa-borda">
                            <div class="tarja-conhecimento-porcentagem" style = "width: ${ membro[0].habilidades[2].nivel }"></div>
                        </div>
                        
                    </li>

                    <li>
                        <h2 class="habilidade-nome">${ membro[0].habilidades[3].nome }<span class="porcentagem">${ membro[0].habilidades[3].nivel }</span></h2>
                        <div  class="tarja-completa-borda">
                            <div class="tarja-conhecimento-porcentagem" style = "width: ${ membro[0].habilidades[3].nivel }"></div>
                        </div>
                        
                    </li>
                </ul>

            </div>

        </div>                 
    </section>

`;

return elemeto;
}





