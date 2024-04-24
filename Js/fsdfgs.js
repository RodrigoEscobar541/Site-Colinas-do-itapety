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