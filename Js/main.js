/*let a = window.innerWidth
window.alert(a)*/

function atualizarWidth(){
  let larguraJanela = window.innerWidth;
  let LiMenu = [window.document.getElementById('MenuEspaço')/*0*/, window.document.getElementById('MenuComoChegar')/*1*/,
                window.document.getElementById('MenuTrilhas')/*2*/, window.document.getElementById('MenuPetFriendly')/*3*/, 
                window.document.getElementById('MenuValores')/*4*/, window.document.getElementById('MenuMotorHome')/*5*/,
                window.document.getElementById('MenuFeedbacks')/*6*/, window.document.getElementById('MenuDuvidas')/*7*/,
                window.document.getElementById('MenuEventos')/*8*/]
  let LiHamburguer = [window.document.getElementById('HamburguerEspaço')/*0*/, window.document.getElementById('HamburguerComoChegar')/*1*/,
                      window.document.getElementById('HamburguerTrilhas')/*2*/, window.document.getElementById('HamburguerPetFriendly')/*3*/, 
                      window.document.getElementById('HamburguerValores')/*4*/, window.document.getElementById('HamburguerMotorHome')/*5*/,
                      window.document.getElementById('HamburguerFeedbacks')/*6*/, window.document.getElementById('HamburguerDuvidas')/*7*/,
                      window.document.getElementById('HamburguerEventos')/*8*/]
  
  if(larguraJanela <= 479){
    LiMenu.style.display = 'none';
    
    LiHamburguer.style.display = 'block';
    
  } else if(larguraJanela >= 480 && larguraJanela <= 767){
    LiMenu[0].style.display = 'block'; /*Espaço*/
    LiMenu[1].style.display = 'block'; /*Como Chegar*/
    LiMenu[2].style.display = 'block'; /*Trilhas*/
    LiMenu[3].style.display = 'none'; /*Pet*/
    LiMenu[4].style.display = 'none'; /*Valores*/
    LiMenu[5].style.display = 'none'; /*MotorHome*/
    LiMenu[6].style.display = 'none'; /*FeedBack*/
    LiMenu[7].style.display = 'none'; /*Duvidas*/
    LiMenu[8].style.display = 'none'; /*Eventos*/
    
    LiHamburguer[0].style.display = 'none'; /*Espaço*/
    LiHamburguer[1].style.display = 'none'; /*Como Chegar*/
    LiHamburguer[2].style.display = 'none'; /*Trilhas*/
    LiHamburguer[3].style.display = 'block'; /*Pet*/
    LiHamburguer[4].style.display = 'block'; /*Valores*/
    LiHamburguer[5].style.display = 'block'; /*MotorHome*/
    LiHamburguer[6].style.display = 'block'; /*FeedBack*/
    LiHamburguer[7].style.display = 'block'; /*Duvidas*/
    LiHamburguer[8].style.display = 'block'; /*Eventos*/
  
  } else if(larguraJanela >= 768 && larguraJanela <= 1023){
    LiMenu[0].style.display = 'block'; /*Espaço*/
    LiMenu[1].style.display = 'block'; /*Como Chegar*/
    LiMenu[2].style.display = 'block'; /*Trilhas*/
    LiMenu[3].style.display = 'block'; /*Pet*/
    LiMenu[4].style.display = 'none'; /*Valores*/
    LiMenu[5].style.display = 'none'; /*MotorHome*/
    LiMenu[6].style.display = 'none'; /*FeedBack*/
    LiMenu[7].style.display = 'none'; /*Duvidas*/
    LiMenu[8].style.display = 'none'; /*Eventos*/
    
    LiHamburguer[0].style.display = 'none'; /*Espaço*/
    LiHamburguer[1].style.display = 'none'; /*Como Chegar*/
    LiHamburguer[2].style.display = 'none'; /*Trilhas*/
    LiHamburguer[3].style.display = 'none'; /*Pet*/
    LiHamburguer[4].style.display = 'block'; /*Valores*/
    LiHamburguer[5].style.display = 'block'; /*MotorHome*/
    LiHamburguer[6].style.display = 'block'; /*FeedBack*/
    LiHamburguer[7].style.display = 'block'; /*Duvidas*/
    LiHamburguer[8].style.display = 'block'; /*Eventos*/
    
  } else if(larguraJanela >= 1024 && larguraJanela <= 1199){
    LiMenu[0].style.display = 'block'; /*Espaço*/
    LiMenu[1].style.display = 'block'; /*Como Chegar*/
    LiMenu[2].style.display = 'block'; /*Trilhas*/
    LiMenu[3].style.display = 'block'; /*Pet*/
    LiMenu[4].style.display = 'block'; /*Valores*/
    LiMenu[5].style.display = 'none'; /*MotorHome*/
    LiMenu[6].style.display = 'none'; /*FeedBack*/
    LiMenu[7].style.display = 'none'; /*Duvidas*/
    LiMenu[8].style.display = 'none'; /*Eventos*/
    
    LiHamburguer[0].style.display = 'none'; /*Espaço*/
    LiHamburguer[1].style.display = 'none'; /*Como Chegar*/
    LiHamburguer[2].style.display = 'none'; /*Trilhas*/
    LiHamburguer[3].style.display = 'none'; /*Pet*/
    LiHamburguer[4].style.display = 'none'; /*Valores*/
    LiHamburguer[5].style.display = 'block'; /*MotorHome*/
    LiHamburguer[6].style.display = 'block'; /*FeedBack*/
    LiHamburguer[7].style.display = 'block'; /*Duvidas*/
    LiHamburguer[8].style.display = 'block'; /*Eventos*/
    
  } else if(larguraJanela >= 1200 && larguraJanela <= 1440){
    LiMenu[0].style.display = 'block'; /*Espaço*/
    LiMenu[1].style.display = 'block'; /*Como Chegar*/
    LiMenu[2].style.display = 'block'; /*Trilhas*/
    LiMenu[3].style.display = 'block'; /*Pet*/
    LiMenu[4].style.display = 'block'; /*Valores*/
    LiMenu[5].style.display = 'none'; /*MotorHome*/
    LiMenu[6].style.display = 'none'; /*FeedBack*/
    LiMenu[7].style.display = 'none'; /*Duvidas*/
    LiMenu[8].style.display = 'none'; /*Eventos*/
    
    LiHamburguer[0].style.display = 'none'; /*Espaço*/
    LiHamburguer[1].style.display = 'none'; /*Como Chegar*/
    LiHamburguer[2].style.display = 'none'; /*Trilhas*/
    LiHamburguer[3].style.display = 'none'; /*Pet*/
    LiHamburguer[4].style.display = 'none'; /*Valores*/
    LiHamburguer[5].style.display = 'block'; /*MotorHome*/
    LiHamburguer[6].style.display = 'block'; /*FeedBack*/
    LiHamburguer[7].style.display = 'block'; /*Duvidas*/
    LiHamburguer[8].style.display = 'block'; /*Eventos*/
    
  } else {
    LiMenu.style.display = 'block';
    
    LiHamburguer.style.display = 'none';
  }}
  setInterval(atualizarWidth, 2000);
  

function Hamburguer(){
  let dropHamburguer = window.document.getElementById('DropHamburguer')
  let chat = window.document.getElementById('chat')
  let img = window.document.getElementById('OpenHamburguer');
  let listaStyle = window.getComputedStyle(dropHamburguer);

  if(listaStyle.display == 'none'){ //open
    dropHamburguer.style.display = 'block'
    chat.style.display = 'none'
    img.src = "./Img/Hambuerguer/Hamburguer Seta.png";
    img.addEventListener('mouseenter', function(){
      img.src = "./Img/Hambuerguer/Hamburguer Close.png"
    })
    img.addEventListener('mouseout', function(){
      img.src = "./Img/Hambuerguer/Hamburguer Seta.png"
    })
    if(window.innerWidth <= 479){ /*Ajusta para cell*/
      img.style.width = '200px'
    }else{
      img.style.width = '40px'
    }
  }else{ //cloed
    dropHamburguer.style.display = 'none'
    chat.style.display = 'none' 
    img.src = "./Img/Hambuerguer/Hamburguer Open.png";
    img.addEventListener('mouseenter', function(){  //Não deixa o mouseenter e  mouseout ser mudar a imgem
      img.src = "./Img/Hambuerguer/Hamburguer Open.png"
    })
    img.addEventListener('mouseout', function(){
      img.src = "./Img/Hambuerguer/Hamburguer Open.png"
    })
    if(window.innerWidth <= 479){ /*Ajusta para cell*/
      img.style.width = '200px'
    }else{
      img.style.width = '40px'
    }
  }
}

 // Função para reprodução automática do carrossel
 function startCarousel() {
  const sliderContainer = document.querySelector('.slider-container');
  const sliderItems = sliderContainer.querySelectorAll('li#carrosel');
  const totalSlides = sliderItems.length;
  let currentSlide = 0;

  function showSlide(index) {
    // Oculta todos os slides
    for (let i = 0; i < sliderItems.length; i++) {
      sliderItems[i].style.display = 'none';
    }

    // Exibe o slide atual
    sliderItems[index].style.display = 'block';
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  // Exibe o primeiro slide
  showSlide(currentSlide);

  // Define a reprodução automática a cada 3 segundos (ajuste conforme necessário)
  setInterval(nextSlide, 3000);
}

// Inicia o carrossel após o carregamento da página
window.addEventListener('load', startCarousel);

function Pergunta(n1) {
  const R = document.getElementsByClassName('R');
   const bord = document.getElementsByClassName('bord')
    switch (n1) {
      case 1:
        R[0].style.display = 'block';
        R[1].style.display = 'none';
        R[2].style.display = 'none';
        R[3].style.display = 'none';
        R[4].style.display = 'none';
        R[5].style.display = 'none';

        bord[0].style.textDecoration = 'underline'
        bord[1].style.textDecoration = 'none'
        bord[2].style.textDecoration = 'none'
        bord[3].style.textDecoration = 'none'
        bord[4].style.textDecoration = 'none'
        bord[5].style.textDecoration = 'none'
        break;
      case 2:
        R[1].style.display = 'block';
        R[0].style.display = 'none';
        R[2].style.display = 'none';
        R[3].style.display = 'none';
        R[4].style.display = 'none';
        R[5].style.display = 'none';

        bord[1].style.textDecoration = 'underline'
        bord[0].style.textDecoration = 'none'
        bord[2].style.textDecoration = 'none'
        bord[3].style.textDecoration = 'none'
        bord[4].style.textDecoration = 'none'
        bord[5].style.textDecoration = 'none'
        break;
      case 3:
        R[2].style.display = 'block';
        R[0].style.display = 'none';
        R[1].style.display = 'none';
        R[3].style.display = 'none';
        R[4].style.display = 'none';
        R[5].style.display = 'none';
        
        bord[2].style.textDecoration = 'underline'
        bord[0].style.textDecoration = 'none'
        bord[1].style.textDecoration = 'none'
        bord[3].style.textDecoration = 'none'
        bord[4].style.textDecoration = 'none'
        bord[5].style.textDecoration = 'none'
        break;
      case 4:
        R[3].style.display = 'block';
        R[0].style.display = 'none';
        R[1].style.display = 'none';
        R[2].style.display = 'none';
        R[4].style.display = 'none';
        R[5].style.display = 'none';

        bord[3].style.textDecoration = 'underline'
        bord[0].style.textDecoration = 'none'
        bord[1].style.textDecoration = 'none'
        bord[2].style.textDecoration = 'none'
        bord[4].style.textDecoration = 'none'
        bord[5].style.textDecoration = 'none'
        break;
      case 5:
        R[4].style.display = 'block';
        R[0].style.display = 'none';
        R[1].style.display = 'none';
        R[2].style.display = 'none';
        R[3].style.display = 'none';
        R[5].style.display = 'none';

        bord[4].style.textDecoration = 'underline'
        bord[0].style.textDecoration = 'none'
        bord[1].style.textDecoration = 'none'
        bord[2].style.textDecoration = 'none'
        bord[3].style.textDecoration = 'none'
        bord[5].style.textDecoration = 'none'
        break;
      case 6:
        R[5].style.display = 'block';
        R[0].style.display = 'none';
        R[1].style.display = 'none';
        R[2].style.display = 'none';
        R[3].style.display = 'none';
        R[4].style.display = 'none';

        bord[5].style.textDecoration = 'underline'
        bord[0].style.textDecoration = 'none'
        bord[1].style.textDecoration = 'none'
        bord[2].style.textDecoration = 'none'
        bord[3].style.textDecoration = 'none'
        bord[4].style.textDecoration = 'none'
        break;
        default:
          window.alert('[ERRO] Resolveremos em breve! Tente não utilizar as dúvidas')
    }
}
function getSelectedButtonValue() {
  const buttons = document.getElementsByName('P');
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].checked) {
      return parseInt(buttons[i].value);
    }
  }
  return null;
}

function abrirchat(){
    let chat = window.document.getElementById('chat') //Img do chat
    let dropHamburguer = window.document.getElementById('DropHamburguer') //Lista Hamburguer
    let img = window.document.getElementById('OpenHamburguer'); //Img padrao hamburguer
    let listaStyle = window.getComputedStyle(chat);
    if (listaStyle.display == 'none'){ //open
        chat.style.display = 'block' //Abre o chat
        dropHamburguer.style.display = 'none' //Caso o hamburguer esteja aberto, fecha
        img.src = "./Img/Hambuerguer/Hamburguer Open.png"; //Caso o hambuguer estiver aberto, coloca a imagem padrao
        
        img.addEventListener('mouseenter', function(){    //Não deixa o mouseenter e  mouseout ser mudar a imgem
          img.src = "./Img/Hambuerguer/Hamburguer Open.png"
        })
        img.addEventListener('mouseout', function(){
          img.src = "./Img/Hambuerguer/Hamburguer Open.png"
        })

        img.style.width = '50px'
    }else{
        chat.style.display = 'none'
    }
}
function atualizarHora() {
    let relogio = window.document.getElementById('relogio')
    const agora = new Date();
    const hora = agora.getHours();
    const minuto = agora.getMinutes().toString().padStart(2, '0');
    relogio.innerHTML = `${hora}:${minuto}`
}
setInterval(atualizarHora, 1000);
function EnviarWpp(){
    let nome = window.document.getElementById('nome').value
    let quantpessoas = window.document.getElementById('Quantpessoas').value
    let dataC = window.document.getElementById('datachegada').value
    let dataS  = window.document.getElementById('datasaida').value

    let link = "https://wa.me/551147901566?text=Olá, Colinas! Me chamo " + nome + ", gostaria de saber se há reserva disponível entre os dias " + dataC + " à " + dataS + " para " + quantpessoas + " pessoas. Obgd! ";
    
    window.open(link, '_blank');
}

function AtualizarBacktoTop() {
  let Desce = window.document.getElementById('Irparabaixo');
  let Sobi = window.document.getElementById('Voltaaotopo');
  let posicaoDesejada = 700; // Posição desejada em pixels

  if (window.scrollY <= posicaoDesejada) {
    Sobi.style.display = 'none';
    Desce.style.display = 'block';
  } else {
    Sobi.style.display = 'block';
    Desce.style.display = 'none';
  }
}
setInterval(AtualizarBacktoTop, 100);
function Descer() {
  window.scrollTo({
    top: document.querySelector("#Espaço").offsetTop,
    behavior: "smooth"
  });
}
function Volta(){
  window.scrollTo({
      top: 0,
      left: 0,
    });
}
