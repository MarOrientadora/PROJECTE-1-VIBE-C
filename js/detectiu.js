   const preguntes = [
      {
        situacio:
          "Has suspés un examen que havies preparat.",
        opcions: [
          {
            text:
              "Soc un desastre i mai aprovaré res.",
            correcta: false
          },
          {
            text:
              "Aquest examen no m'ha eixit bé. Puc revisar què ha fallat i demanar ajuda.",
            correcta: true
          },
          {
            text:
              "No val la pena tornar-ho a intentar.",
            correcta: false
          }
        ],
        explicacio:
          "Un resultat concret no defineix la teua capacitat. Pots analitzar què ha fallat i provar una estratègia diferent."
      },
      {
        situacio:
          "Dos amics han quedat i no t'han avisat.",
        opcions: [
          {
            text:
              "Segur que ja no em volen.",
            correcta: false
          },
          {
            text:
              "Pot haver-hi diverses explicacions. Puc preguntar-ho abans de traure conclusions.",
            correcta: true
          },
          {
            text:
              "No tornaré a parlar amb ells.",
            correcta: false
          }
        ],
        explicacio:
          "No podem saber què pensen els altres sense preguntar. Comprovar els fets evita conclusions precipitades."
      },
      {
        situacio:
          "Has comés un error davant de tota la classe.",
        opcions: [
          {
            text:
              "Tothom pensarà que soc ridícul o ridícula.",
            correcta: false
          },
          {
            text:
              "Equivocar-me és normal. Un error no defineix qui soc.",
            correcta: true
          },
          {
            text:
              "No tornaré a participar mai més.",
            correcta: false
          }
        ],
        explicacio:
          "Els errors formen part de l'aprenentatge. Una situació puntual no determina el teu valor."
      },
      {
        situacio:
          "Veus en xarxes socials una persona que sembla tindre una vida perfecta.",
        opcions: [
          {
            text:
              "La seua vida és perfecta i la meua no val res.",
            correcta: false
          },
          {
            text:
              "A les xarxes es mostra només una part de la realitat. No és una comparació completa.",
            correcta: true
          },
          {
            text:
              "Hauria de ser exactament com aquesta persona.",
            correcta: false
          }
        ],
        explicacio:
          "Les xarxes solen mostrar moments seleccionats. Comparar tota la teua vida amb una imatge parcial no és just."
      },
      {
        situacio:
          "Un company fa un comentari negatiu sobre el teu aspecte.",
        opcions: [
          {
            text:
              "Si ho ha dit, deu ser perquè té raó.",
            correcta: false
          },
          {
            text:
              "La seua opinió no determina el meu valor. Puc posar límits i buscar suport.",
            correcta: true
          },
          {
            text:
              "He de canviar perquè ningú em critique.",
            correcta: false
          }
        ],
        explicacio:
          "Una opinió no és una veritat absoluta. Posar límits i parlar amb algú de confiança és una resposta protectora."
      },
      {
        situacio:
          "No has aconseguit fer bé una activitat nova al primer intent.",
        opcions: [
          {
            text:
              "No se'm dona bé i hauria de deixar-ho.",
            correcta: false
          },
          {
            text:
              "Encara estic aprenent. No necessite fer-ho perfecte al primer intent.",
            correcta: true
          },
          {
            text:
              "La resta sempre ho fa millor que jo.",
            correcta: false
          }
        ],
        explicacio:
          "Aprendre implica practicar, equivocar-se i progressar. No cal dominar una habilitat des del principi."
      },
      {
        situacio:
          "Has enviat un missatge i la persona tarda molt a respondre.",
        opcions: [
          {
            text:
              "Està enfadada amb mi i he fet alguna cosa malament.",
            correcta: false
          },
          {
            text:
              "Pot estar ocupada o no haver vist el missatge. Esperaré abans d'interpretar-ho.",
            correcta: true
          },
          {
            text:
              "Segur que ja no vol parlar amb mi.",
            correcta: false
          }
        ],
        explicacio:
          "Una resposta tardana pot tindre moltes causes. És millor esperar informació abans d'assumir la pitjor explicació."
      },
      {
        situacio:
          "No t'han seleccionat per a una activitat o un equip.",
        opcions: [
          {
            text:
              "No soc prou bo o bona per a res.",
            correcta: false
          },
          {
            text:
              "Aquesta vegada no m'han seleccionat, però això no defineix totes les meues capacitats.",
            correcta: true
          },
          {
            text:
              "Mai tornaré a presentar-me a res.",
            correcta: false
          }
        ],
        explicacio:
          "Una decisió concreta no determina tot el teu potencial. Pots demanar orientació i continuar desenvolupant les teues habilitats."
      },
      {
        situacio:
          "Un amic està més callat que de costum quan parleu.",
        opcions: [
          {
            text:
              "Segur que està molest amb mi.",
            correcta: false
          },
          {
            text:
              "Pot tindre un mal dia. Puc preguntar-li com està sense assumir que és culpa meua.",
            correcta: true
          },
          {
            text:
              "Ja no li caic bé.",
            correcta: false
          }
        ],
        explicacio:
          "L'estat d'ànim d'una altra persona no sempre té relació amb tu. Preguntar amb respecte és més útil que endevinar."
      },
      {
        situacio:
          "Has rebut una crítica sobre un treball que havies fet amb esforç.",
        opcions: [
          {
            text:
              "Tot el treball és horrible i jo no servisc per a açò.",
            correcta: false
          },
          {
            text:
              "La crítica pot ajudar-me a millorar una part del treball, però no anul·la tot l'esforç que he fet.",
            correcta: true
          },
          {
            text:
              "No tornaré a ensenyar mai el que faig.",
            correcta: false
          }
        ],
        explicacio:
          "Una crítica pot referir-se a aspectes concrets. No significa que tot estiga malament ni que tu no tingues capacitat."
      }
    ];

    const situacioElement =
      document.getElementById("situacio");

    const opcionsElement =
      document.getElementById("opcions");

    const numeroPreguntaElement =
      document.getElementById("numeroPregunta");

    const puntuacioElement =
      document.getElementById("puntuacio");

    const barraProgresElement =
      document.getElementById("barraProgres");

    const contenidorBarra =
      document.querySelector(".barra-progres");

    const feedbackElement =
      document.getElementById("feedback");

    const titolFeedbackElement =
      document.getElementById("titolFeedback");

    const textFeedbackElement =
      document.getElementById("textFeedback");

    const botoSeguent =
      document.getElementById("botoSeguent");

    const zonaJoc =
      document.getElementById("zonaJoc");

    const pantallaFinal =
      document.getElementById("pantallaFinal");

    const puntuacioFinalElement =
      document.getElementById("puntuacioFinal");

    const missatgeFinalElement =
      document.getElementById("missatgeFinal");

    const reiniciarJoc =
      document.getElementById("reiniciarJoc");

    let preguntaActual = 0;
    let puntuacio = 0;
    let respostaSeleccionada = false;

    function actualitzarProgres() {
      const percentatge =
        ((preguntaActual + 1) / preguntes.length) * 100;

      barraProgresElement.style.width =
        `${percentatge}%`;

      contenidorBarra.setAttribute(
        "aria-valuenow",
        Math.round(percentatge)
      );
    }

    function mostrarPregunta() {
      respostaSeleccionada = false;

      const pregunta =
        preguntes[preguntaActual];

      situacioElement.textContent =
        pregunta.situacio;

      numeroPreguntaElement.textContent =
        `Situació ${preguntaActual + 1} de ${preguntes.length}`;

      puntuacioElement.textContent =
        `Punts: ${puntuacio}`;

      actualitzarProgres();

      opcionsElement.innerHTML = "";

      feedbackElement.className =
        "feedback";

      titolFeedbackElement.textContent = "";
      textFeedbackElement.textContent = "";

      botoSeguent.classList.remove("visible");

      pregunta.opcions.forEach(
        (opcio, index) => {
          const boto =
            document.createElement("button");

          boto.type = "button";
          boto.className = "opcio";
          boto.textContent = opcio.text;

          boto.addEventListener(
            "click",
            () => {
              comprovarResposta(
                boto,
                opcio.correcta,
                index
              );
            }
          );

          opcionsElement.appendChild(boto);
        }
      );
    }

    function comprovarResposta(
      botoSeleccionat,
      esCorrecta,
      indexSeleccionat
    ) {
      if (respostaSeleccionada) {
        return;
      }

      respostaSeleccionada = true;

      const pregunta =
        preguntes[preguntaActual];

      const botons =
        opcionsElement.querySelectorAll(".opcio");

      botons.forEach((boto, index) => {
        boto.disabled = true;

        if (pregunta.opcions[index].correcta) {
          boto.classList.add("correcta");
        }
      });

      if (esCorrecta) {
        puntuacio++;

        botoSeleccionat.classList.add(
          "correcta"
        );

        feedbackElement.className =
          "feedback visible correcte";

        titolFeedbackElement.textContent =
          "Bona investigació!";
      } else {
        botons[indexSeleccionat].classList.add(
          "incorrecta"
        );

        feedbackElement.className =
          "feedback visible incorrecte";

        titolFeedbackElement.textContent =
          "Revisa les proves";
      }

      textFeedbackElement.textContent =
        pregunta.explicacio;

      puntuacioElement.textContent =
        `Punts: ${puntuacio}`;

      botoSeguent.classList.add("visible");

      if (
        preguntaActual ===
        preguntes.length - 1
      ) {
        botoSeguent.textContent =
          "Veure el resultat";
      } else {
        botoSeguent.textContent =
          "Següent situació";
      }
    }

    botoSeguent.addEventListener(
      "click",
      () => {
        preguntaActual++;

        if (
          preguntaActual <
          preguntes.length
        ) {
          mostrarPregunta();
        } else {
          mostrarResultatFinal();
        }
      }
    );

    function mostrarResultatFinal() {
      zonaJoc.style.display = "none";
      pantallaFinal.classList.add("visible");

      puntuacioFinalElement.textContent =
        `${puntuacio} de ${preguntes.length} punts`;

      if (puntuacio === preguntes.length) {
        missatgeFinalElement.textContent =
          "Excel·lent investigació. Has identificat totes les alternatives més realistes i respectuoses. Recorda que parlar-te amb amabilitat no és ignorar els problemes, sinó afrontar-los sense atacar-te.";
      } else if (puntuacio >= 7) {
        missatgeFinalElement.textContent =
          "Molt bon treball. Ja reconeixes moltes formes de pensament equilibrat. Continua practicant la diferència entre els fets i les interpretacions automàtiques.";
      } else if (puntuacio >= 4) {
        missatgeFinalElement.textContent =
          "Has fet una bona primera investigació. Alguns pensaments automàtics poden semblar certs, però és útil buscar proves i alternatives abans d'acceptar-los.";
      } else {
        missatgeFinalElement.textContent =
          "Has completat l'activitat, i això ja és un pas important. Detectar pensaments automàtics necessita pràctica. Pots repetir els casos i observar quines respostes són més realistes.";
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    reiniciarJoc.addEventListener(
      "click",
      () => {
        preguntaActual = 0;
        puntuacio = 0;
        respostaSeleccionada = false;

        pantallaFinal.classList.remove(
          "visible"
        );

        zonaJoc.style.display = "block";

        mostrarPregunta();

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );