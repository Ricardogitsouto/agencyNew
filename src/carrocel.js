import { log } from "util";
(function(){

  let header = document.querySelector('.cabecario');
  // let itens_menu = document.querySelectorAll('.menu li')
  let bullets= document.querySelectorAll('.bullets li')
  let txt = document.querySelector('.caixa-texto p')

  // Cetas que trocam as imagend o header
  let botao_esquerdo = document.querySelector('.btleft')
  let botao_direito = document.querySelector('.btrigth')
  // let cetas = document.querySelectorAll(".bt")

  let imagens = ['img-cabecalho','escritorio-dev','mulher-segurando-tablet','mao-segurando-celular']
  let lista_texto = ['esse é o primeiro texto','esse é o segundo exto','esse é o terceiro texto','Esse é o quarto texto']
  let contador = 1;

    // Iniciando o seInterval carrocel ativo
  carrocelAtivo(contador);

  
  var intervalo;

    function carrocelAtivo(x){
      intervalo = setInterval(function(){
        if(x > 3){ x = 0 }
        
        muda(x)       
        x++          
        contador = x;
      },5000)   
    }

    // Funçâo que para o setInterval do carrocel
    function carrocelStop(){
      window.clearInterval(intervalo);
    }

    // Adicionando evento aos bullets
    for (let index = 0; index < bullets.length; index++) {
      bullets[index].addEventListener('click',function(){
        carrocelStop(); 
        muda(index)
      })  
    }

  // Incrementando e decrementando o contador e limitando o carocel

  botao_esquerdo.addEventListener('click',()=>{
    carrocelStop()
    contador --
    if(contador<0){contador = 3}
    muda(contador)
  })

  botao_direito.addEventListener('click',()=>{
    carrocelStop()
    contador ++
    if(contador>3){contador = 0}
    muda(contador)
  })

    
  function muda(x){
    header.style.backgroundImage= "url('imgs/"+imagens[x]+".jpg')"
    
    txt.textContent = lista_texto[x]
    bullets.forEach(function(b){
        b.style.background = "#fff"
        b.className = "off"
    })

    bullets[x].style.background = "rgba(216, 131, 85, 0.7)"
    bullets[x].className = "ativo" 
  }

})()

