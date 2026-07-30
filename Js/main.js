/* ==========================================================================
   Camping Colinas do Itapety — comportamento da página

   O que saiu daqui e por quê:

   1) atualizarWidth() rodava a cada 2 segundos e mostrava/escondia item por
      item do menu conforme a largura da janela. Em telas de até 479px e acima
      de 1440px ela tentava usar uma LISTA como se fosse um elemento só
      (LiMenu.style.display), o que dava erro no console a cada 2 segundos e
      deixava o menu quebrado. Esse trabalho agora é do CSS (@media), que faz
      isso de graça e sem rodar código.

   2) setInterval(AtualizarBacktoTop, 100) chamava a função 10 vezes por
      segundo, para sempre. Agora só roda quando a página é rolada.

   3) getSelectedButtonValue() não era chamada por ninguém.
   ========================================================================== */

/* ---------------------------------------------------------------- MENU ---- */
function Hamburguer() {
  const dropHamburguer = document.getElementById('DropHamburguer');
  const chat = document.getElementById('chat');
  const img = document.getElementById('OpenHamburguer');
  const botao = document.querySelector('.BotaoHamburguer');
  const aberto = getComputedStyle(dropHamburguer).display !== 'none';

  if (aberto) {
    dropHamburguer.style.display = 'none';
    img.src = './Img/Hambuerguer/Hamburguer Open.webp';
  } else {
    dropHamburguer.style.display = 'block';
    img.src = './Img/Hambuerguer/Hamburguer Seta.webp';
  }

  chat.style.display = 'none';
  if (botao) {
    botao.setAttribute('aria-expanded', String(!aberto));
    botao.setAttribute('aria-label', aberto ? 'Abrir menu' : 'Fechar menu');
  }
}

// Trocar a imagem no passar do mouse: registrado UMA vez, não a cada clique
// (antes cada clique adicionava mais um par de ouvintes, que iam se acumulando).
(function prepararHoverHamburguer() {
  const img = document.getElementById('OpenHamburguer');
  if (!img) return;
  const estaAberto = () => {
    const drop = document.getElementById('DropHamburguer');
    return drop && getComputedStyle(drop).display !== 'none';
  };
  img.addEventListener('mouseenter', () => {
    if (estaAberto()) img.src = './Img/Hambuerguer/Hamburguer Close.webp';
  });
  img.addEventListener('mouseleave', () => {
    img.src = estaAberto()
      ? './Img/Hambuerguer/Hamburguer Seta.webp'
      : './Img/Hambuerguer/Hamburguer Open.webp';
  });
})();

// Fecha o menu ao escolher uma seção (no celular ele cobria o conteúdo)
document.querySelectorAll('#DropHamburguer a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const drop = document.getElementById('DropHamburguer');
    const botao = document.querySelector('.BotaoHamburguer');
    const img = document.getElementById('OpenHamburguer');
    if (drop) drop.style.display = 'none';
    if (img) img.src = './Img/Hambuerguer/Hamburguer Open.webp';
    if (botao) {
      botao.setAttribute('aria-expanded', 'false');
      botao.setAttribute('aria-label', 'Abrir menu');
    }
  });
});

/* ----------------------------------------------------- CARROSSEL DO TOPO -- */
function startCarousel() {
  const slides = document.querySelectorAll('.SeçãoCarrosel .slide-topo');
  if (slides.length === 0) return;
  let atual = 0;

  function mostrar(indice) {
    slides.forEach((slide, i) => {
      slide.style.display = i === indice ? 'block' : 'none';
    });
  }

  mostrar(atual);
  setInterval(() => {
    atual = (atual + 1) % slides.length;
    mostrar(atual);
  }, 3000);
}

/* ------------------------------------------- SETAS DOS CARROSSÉIS DE TRILHA */
/* As setas < > das trilhas nunca funcionaram: o HTML foi escrito para a
   biblioteca swiffy-slider, mas só o CSS dela era carregado — o JS, nunca.
   São poucas linhas, então em vez de baixar a biblioteca inteira, a rolagem
   é feita aqui. */
function prepararSetasTrilhas() {
  document.querySelectorAll('.carrosel-trilha').forEach((slider) => {
    const container = slider.querySelector('.slider-container');
    if (!container) return;

    slider.querySelectorAll('.slider-nav').forEach((botao) => {
      const paraFrente = botao.classList.contains('slider-nav-next');
      botao.addEventListener('click', (evento) => {
        evento.preventDefault();
        const passo = container.clientWidth;
        const fim = container.scrollWidth - container.clientWidth;

        let destino = container.scrollLeft + (paraFrente ? passo : -passo);
        // dá a volta: da última foto vai para a primeira, e vice-versa
        if (destino > fim + 1) destino = 0;
        if (destino < 0) destino = fim;

        container.scrollTo({ left: destino, behavior: 'smooth' });
      });
    });
  });
}

/* ------------------------------------------------------------- DÚVIDAS ---- */
function Pergunta(n1) {
  const respostas = document.getElementsByClassName('R');
  const perguntas = document.getElementsByClassName('bord');
  const icones = document.getElementsByClassName('faq-icon');
  const botoes = document.getElementsByClassName('P');
  const idx = n1 - 1;

  const jaAberta = respostas[idx].style.display === 'block';

  for (let i = 0; i < respostas.length; i++) {
    respostas[i].style.display = 'none';
    perguntas[i].style.textDecoration = 'none';
    icones[i].textContent = '+';
    if (botoes[i]) botoes[i].setAttribute('aria-expanded', 'false');
  }

  if (!jaAberta) {
    respostas[idx].style.display = 'block';
    perguntas[idx].style.textDecoration = 'underline';
    icones[idx].textContent = '−';
    if (botoes[idx]) botoes[idx].setAttribute('aria-expanded', 'true');
  }
}

/* --------------------------------------------- FORMULÁRIO DE RESERVA ------ */
let relogioTimer = null;

function atualizarHora() {
  const relogio = document.getElementById('relogio');
  if (!relogio) return;
  const agora = new Date();
  const hora = agora.getHours();
  const minuto = String(agora.getMinutes()).padStart(2, '0');
  relogio.textContent = `${hora}:${minuto}`;
}

function abrirchat() {
  const chat = document.getElementById('chat');
  const dropHamburguer = document.getElementById('DropHamburguer');
  const img = document.getElementById('OpenHamburguer');
  const botaoMenu = document.querySelector('.BotaoHamburguer');
  const fechado = getComputedStyle(chat).display === 'none';

  if (fechado) {
    chat.style.display = 'block';
    if (dropHamburguer) dropHamburguer.style.display = 'none';
    if (img) img.src = './Img/Hambuerguer/Hamburguer Open.webp';
    if (botaoMenu) {
      botaoMenu.setAttribute('aria-expanded', 'false');
      botaoMenu.setAttribute('aria-label', 'Abrir menu');
    }
    // O relógio só corre com o formulário aberto. Antes rodava 1x por segundo
    // para sempre, mesmo com o formulário fechado e ninguém vendo.
    atualizarHora();
    if (!relogioTimer) relogioTimer = setInterval(atualizarHora, 30000);
  } else {
    chat.style.display = 'none';
    if (relogioTimer) {
      clearInterval(relogioTimer);
      relogioTimer = null;
    }
  }
}

function EnviarWpp() {
  const nome = document.getElementById('nome').value.trim();
  const quantpessoas = document.getElementById('Quantpessoas').value;
  const dataC = document.getElementById('datachegada').value;
  const dataS = document.getElementById('datasaida').value;

  const texto =
    `Olá, Colinas! Me chamo ${nome}, gostaria de saber se há reserva disponível ` +
    `entre os dias ${dataC} à ${dataS} para ${quantpessoas} pessoas. Obgd! `;

  // encodeURIComponent: sem isso, acento e "#" cortavam a mensagem no meio
  window.open(`https://wa.me/551147901566?text=${encodeURIComponent(texto)}`, '_blank');
}

/* ------------------------------------------------------- VOLTA AO TOPO ---- */
function AtualizarBacktoTop() {
  const desce = document.getElementById('Irparabaixo');
  const sobe = document.getElementById('Voltaaotopo');
  if (!desce || !sobe) return;
  const posicaoDesejada = 700;

  if (window.scrollY <= posicaoDesejada) {
    sobe.style.display = 'none';
    desce.style.display = 'block';
  } else {
    sobe.style.display = 'block';
    desce.style.display = 'none';
  }
}

function Descer() {
  const alvo = document.querySelector('#Espaço');
  if (!alvo) return;
  window.scrollTo({ top: alvo.offsetTop, behavior: 'smooth' });
}

function Volta() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

/* --------------------------------------------------------------- INÍCIO --- */
// passive: true avisa o navegador que a rolagem não vai ser bloqueada,
// o que deixa o site mais leve para deslizar no celular.
window.addEventListener('scroll', AtualizarBacktoTop, { passive: true });
AtualizarBacktoTop();
prepararSetasTrilhas();
startCarousel();
