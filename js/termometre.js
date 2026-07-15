// 1. Base de dades de situacions i consells segons el nivell triat
const situacions = [
    {
        titol: "L'exposició oral",
        descripcio: "Estàs a punt de fer una exposició oral davant de tota la classe. Notes que et suen les mans, el cor et batega molt de pressa i penses: 'Em quedaré en blanc i es riuran'.",
        feedback: {
            1: "🟢 Calma: Si aconsegueixes estar ací, és perfecte! Confiar en la teua preparació i respirar fondo abans de parlar t'ajudarà a mantenir el control.",
            2: "🟡 Inquiet: És normal sentir certes 'papallones' a la panxa. Aquests nervis lleus són positius, et mantenen despert i concentrat. Accepta'ls i somriu!",
            3: "🟠 Alerta: El cor a mil és senyal d'activació. Atura't un moment, inspira en 4 segons i expira en 4 més. Recorda't que t'ho saps bé i que no passa res per equivocar-se.",
            4: "🔴 Pànic: Compte! Si penses que es riuran, estàs caient en una trampa de la ment (lectura del pensament). Digues-te a tu mateix: 'Estic segur, només és una exposició'. Si et bloqueges, demana beure un glop d'aigua per a fer una pausa."
        }
    },
    {
        titol: "La discussió al pati",
        descripcio: "Un company de classe et pren la pilota de bàsquet mentre estaves jugant sense demanar permís, i a sobre et fa una burla en marxar.",
        feedback: {
            1: "🟢 Calma: Evitar enfadar-se és molt complicat ací, però si estàs calmat, podràs parlar amb ell de manera assertiva ('Torna-me-la, estàvem jugant') sense crits.",
            2: "🟡 Inquiet: Sents certa ràbia però et contens. És una bona oportunitat per expressar el teu límit sense perdre el control. Digues-li clarament que no t'ha agradat.",
            3: "🟠 Alerta: Estàs a punt d'esclatar i començar a cridar o insultar. Alerta! Si reacciones així, el conflicte es farà més gran. Dona tres passes arrere i respira abans de respondre.",
            4: "🔴 Pànic/Ràbia extrema: Sents ganes d'espentar-lo o d'agredir. Stop instantani! Una agressió et portarà problemes greus. Allunya't del lloc de seguida i busca l'ajuda d'un professor del pati."
        }
    },
    {
        titol: "L'examen sorpresa",
        descripcio: "El professor entra a l'aula i diu: 'Talleu un full de llibreta, que anem a fer un control sorpresa del tema que vam explicar ahir'. No t'ho havies mirat gens.",
        feedback: {
            1: "🟢 Calma: Si estàs tranquil malgrat no haver estudiat, tens un superpoder. Et permetrà concentrar-te i recordar allò que vas escoltar a classe ahir.",
            2: "🟡 Inquiet: Sentir-te així és molt lògic. Fes una lectura ràpida de les preguntes i comença per la que et sàpigues millor per anar agafant confiança.",
            3: "🟠 Alerta: Comences a pensar 'Suspendré, soc un desastre'. Frena aquests pensaments de tot o res! No haver estudiat un dia no et defineix com a estudiant. Fes el que pugues.",
            4: "🔴 Pànic: Si et bloqueges completament i et veus incapaç d'escriure ni el teu nom, tanca els ulls. Respira lentament tres vegades. No és la fi del món, és només un exercici per a saber com portes el tema."
        }
    }
];

let situacioActualIndex = 0;

// 2. Elements del DOM (HTML)
const textSituacio = document.getElementById("text-situacio");
const textFeedback = document.getElementById("text-feedback");
const caixaFeedback = document.getElementById("caixa-feedback");
const bombolla = document.getElementById("bombolla-termometre");
const nivells = document.querySelectorAll(".nivell");
const botoSeguent = document.getElementById("boto-seguent");

// 3. Funció per a mostrar una situació nova
function carregarSituacio() {
    const situacio = situacions[situacioActualIndex];
    textSituacio.textContent = `[${situacio.titol}] ${situacio.descripcio}`;
    
    // Reiniciar estats visuals
    textFeedback.textContent = "Fes clic en el nivell del termòmetre que consideres que representa millor com et sentiries o com hauries de gestionar-ho.";
    caixaFeedback.style.borderLeftColor = "#ddd";
    bombolla.style.backgroundColor = "#e0e0e0";
    bombolla.style.boxShadow = "none";
    
    nivells.forEach(n => n.classList.remove("actiu"));
}

// 4. Gestió dels clics en els nivells del termòmetre
nivells.forEach(elementNivell => {
    elementNivell.addEventListener("click", () => {
        // Traure l'actiu de tots els nivells i posar-lo en el que hem clicat
        nivells.forEach(n => n.classList.remove("actiu"));
        elementNivell.classList.add("actiu");
        
        const nivellSeleccionat = elementNivell.getAttribute("data-nivell");
        const colorSeleccionat = elementNivell.getAttribute("data-color");
        
        // Canviar el color de la bombolla inferior
        bombolla.style.backgroundColor = colorSeleccionat;
        bombolla.style.boxShadow = `0 0 15px ${colorSeleccionat}`;
        
        // Mostrar el text de consell corresponent
        const situacio = situacions[situacioActualIndex];
        textFeedback.textContent = situacio.feedback[nivellSeleccionat];
        
        // Estilitzar la vora de la caixa de feedback amb el color triat
        caixaFeedback.style.borderLeft = `5px solid ${colorSeleccionat}`;
    });
});

// 5. Botó de següent situació
botoSeguent.addEventListener("click", () => {
    situacioActualIndex++;
    if (situacioActualIndex >= situacions.length) {
        situacioActualIndex = 0; // Torna a començar
    }
    carregarSituacio();
});

// 6. Iniciar el joc per primera vegada
carregarSituacio();