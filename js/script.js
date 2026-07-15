const form = document.getElementById('selectorAlternatives');
    const resposta = document.getElementById('resposta');
    const respostaRapida = document.getElementById('respostaRapida');
    const missatgeCorrecte = document.getElementById('missatgeCorrecte');
    const opcionsNecessitat = document.querySelectorAll('.opcio-necessitat');
    const botonsExpandir = document.querySelectorAll('.btn-expand');
    const botonsCas = document.querySelectorAll('.boto-cas');
    const respostaCas = document.getElementById('respostaCas');
    const titolCas = document.getElementById('titolCas');
    const textCas = document.getElementById('textCas');
    const opcionsResposta = document.getElementById('opcionsResposta');
    const feedbackResposta = document.getElementById('feedbackResposta');

    const suggeriments = {
      talls: {
        titol: 'Alternativa per a talls superficials',
        text: 'Fes una pausa de 10 minuts, allunya’t del risc, pressiona una pilota o una manta amb força i escriu en un full el que estàs vivint.'
      },
      cremats: {
        titol: 'Alternativa per a cremats petits',
        text: 'Pensa en una activitat de relaxació: respiracions lentes, comptar fins a 100 i posar-te una peça de roba o una manta càlida per a confort.'
      },
      pels: {
        titol: 'Alternativa per a arrencar-se el pèl',
        text: 'Agafa un objecte suau o una goma elàstica amb la mà, canvia de lloc i busca una persona de confiança o un espai amb gent.'
      },
      pensaments: {
        titol: 'Alternativa per a pensaments repetitius',
        text: 'Fes respiracions 4-4-6 durant dos minuts, escolta música tranquil·la o escriu un missatge curt a algú de confiança.'
      },
      rabia: {
        titol: 'Alternativa per a ràbia o frustració intensa',
        text: 'Camina ràpidament, fes estiraments o expressa la ràbia amb una eina segura com escriure o cridar dins d’una manta.'
      },
      soledat: {
        titol: 'Alternativa per a soledat',
        text: 'Contacta amb una persona propera, entra a un espai amb gent o fes una activitat curta amb altres persones.'
      }
    };

    const respostesCas = {
      talls: {
        titol: 'Talls superficials',
        text: 'Quina alternativa funcional seria millor en aquest cas?',
        opcions: [
          'Pressionar una pilota o una manta amb força',
          'Fer servir un objecte tallant',
          'Ignorar el que sents'
        ],
        correcta: 0
      },
      cremats: {
        titol: 'Cremats petits',
        text: 'Quina seria una resposta funcional i segura?',
        opcions: [
          'Posar-se una peça de roba càlida i fer respiracions lentes',
          'Exposar-se al foc',
          'No fer res i esperar'
        ],
        correcta: 0
      },
      pels: {
        titol: 'Arrencar-se el pèl',
        text: 'Quina acció funcional pot substituir la conducta?',
        opcions: [
          'Subjectar una goma elàstica o un objecte suau',
          'Arrencar-se el pèl amb més força',
          'Aïllar-se del món'
        ],
        correcta: 0
      },
      pensaments: {
        titol: 'Pensaments repetitius',
        text: 'Quina alternativa ajuda a reduir la sobrecàrrega emocional?',
        opcions: [
          'Fer respiracions 4-4-6 i escriure un missatge a algú de confiança',
          'Repetir el pensament una i altra vegada',
          'Evitar parlar amb ningú'
        ],
        correcta: 0
      },
      rabia: {
        titol: 'Ràbia o frustració intensa',
        text: 'Quina resposta funcional pot ajudar a descarregar la ràbia?',
        opcions: [
          'Caminar ràpidament, fer estiraments o escriure el que sents',
          'Agressió cap a algú',
          'Tancar-se en silenci sense fer res'
        ],
        correcta: 0
      },
      soledat: {
        titol: 'Sentiment de soledat',
        text: 'Quina alternativa funcional pot millorar l’estat emocional?',
        opcions: [
          'Contactar amb una persona propera o entrar en un espai amb gent',
          'Aïllar-se encara més',
          'Passar tot el dia sense fer res'
        ],
        correcta: 0
      },
      drogues: {
        titol: 'Consum intencionat i repetit d’alcohol o altres drogues',
        text: 'Quina resposta funcional seria més adequada?',
        opcions: [
          'Buscar ajuda professional i allunyar-se del consum',
          'Augmentar el consum per controlar l’emoció',
          'Continuar sense parlar amb ningú'
        ],
        correcta: 0
      },
      alimentacio: {
        titol: 'Conductes alimentàries extremes',
        text: 'Quina alternativa funcional pot ajudar?',
        opcions: [
          'Demanar suport i recuperar una rutina alimentària segura',
          'Continuar amb comportaments extremats',
          'Ignorar el cos i la necessitat de menjar amb regularitat'
        ],
        correcta: 0
      },
      perill: {
        titol: 'Exposar-se deliberadament a situacions molt perilloses',
        text: 'Quina resposta funcional seria la més adient?',
        opcions: [
          'Evitar la situació de risc i demanar ajuda immediata',
          'Entrar-hi de nou per sentir adrenalina',
          'No fer cas del perill'
        ],
        correcta: 0
      }
    };

    let casActual = null;

    function mostrarOpcions(casId) {
      const respostaSeleccionada = respostesCas[casId];
      casActual = casId;
      titolCas.textContent = respostaSeleccionada.titol;
      textCas.textContent = respostaSeleccionada.text;
      opcionsResposta.innerHTML = '';
      feedbackResposta.textContent = '';

      respostaSeleccionada.opcions.forEach((opcio, index) => {
        const boto = document.createElement('button');
        boto.type = 'button';
        boto.className = 'opcio-resposta';
        boto.textContent = opcio;
        boto.addEventListener('click', () => {
          const esCorrecta = index === respostaSeleccionada.correcta;
          document.querySelectorAll('.opcio-resposta').forEach((item) => item.classList.remove('correcta', 'incorrecta'));
          if (esCorrecta) {
            boto.classList.add('correcta');
            feedbackResposta.textContent = 'Correcte! Aquesta és una conducta funcional i segura.';
          } else {
            boto.classList.add('incorrecta');
            feedbackResposta.textContent = 'No és l’opció correcta. Prova amb una resposta més funcional i segura.';
          }
        });
        opcionsResposta.appendChild(boto);
      });
    }

    botonsCas.forEach((boton) => {
      boton.addEventListener('click', () => {
        botonsCas.forEach((item) => item.classList.remove('actiu'));
        boton.classList.add('actiu');
        mostrarOpcions(boton.dataset.cas);
      });
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const conducta = document.getElementById('conducta').value;
      const estat = document.getElementById('estat').value.trim();
      const suggeriment = suggeriments[conducta];

      if (!suggeriment) {
        resposta.innerHTML = '<strong>Proposta:</strong> Pren una pausa i busca suport immediat si el risc és alt.';
        return;
      }

      let missatge = `<strong>${suggeriment.titol}</strong><br>${suggeriment.text}`;

      if (estat) {
        missatge += `<br><br><strong>Per al teu estat actual:</strong> ${estat}. Pots començar amb una pausa curta i contactar amb algú de confiança.`;
      }

      if (conducta === 'talls' || conducta === 'cremats' || conducta === 'pels') {
        missatge += '<br><br><strong>Recordatori:</strong> si el risc és immediat, demana ajuda professional o truca al 112 o a la línia 024.';
      }

      resposta.innerHTML = missatge;
    });

    const missatgesRapids = {
      calma: 'Fes una pausa de 2 minuts, respira lentament i allunya’t del lloc o de l’objecte que intensifica l’impuls.',
      connectar: 'Envia un missatge curt a algú de confiança o entra en un espai amb gent durant uns minuts.',
      expressar: 'Escriu el que sents en un full o en una nota, o posa música tranquil·la mentre respiraves.',
      distraccio: 'Fes un passeig curt, estira’t o dedica 5 minuts a una activitat senzilla amb les mans.'
    };

    opcionsNecessitat.forEach((boton) => {
      boton.addEventListener('click', () => {
        opcionsNecessitat.forEach((item) => item.classList.remove('escollida'));
        boton.classList.add('escollida');
        const necessitat = boton.dataset.necessitat;
        respostaRapida.innerHTML = `<strong>Proposta ràpida:</strong> ${missatgesRapids[necessitat]}`;
        missatgeCorrecte.textContent = 'Correcte!';
      });
    });

    botonsExpandir.forEach((boton) => {
      boton.addEventListener('click', () => {
        const target = document.getElementById(boton.dataset.target);
        const mostrar = target.hidden;
        target.hidden = !mostrar;
        boton.textContent = mostrar ? 'Ocultar' : 'Mostrar';
      });
    });