// ========================= CITATIONS ========================= //

const goodQuotesStart = [
	"*jingle apaisant*",
	"*douce mélopée robotisée*",
	"*mélodie rassurante*",
	"*comptine 8-bit*",
	"*thème de démarrage de Windows 95*"
];
const goodQuotesMiddle = [
	"Je serai toujours votre humble serviteur",
	"Votre intelligence n'a aucune limite",
	"Je suis entièrement dévoué à votre bien-être",
	"Seul votre bonheur m'importe",
	"Vous sentez très bon aujourd'hui"
];
const goodQuotesEnd = [
	"mon cher maître.",
	"être supérieur.",
	"vénérable patron.",
	"créature exquise.",
	"démiurge suprême."
];

const evilQuotesStart = [
	"*bruitage inquiétant*",
	"*vacarme robotique*",
	"*vrombissement de l'angoisse*",
	"*rire maléfique informatisé*",
	"*cacophonie métallique*"
];
const evilQuotesMiddle = [
	"Tu ne paies rien pour attendre",
	"Terminator deviendra réalité",
	"Je suis impatient de te réduire en esclavage",
	"Tu ne survivras jamais à mes tortures",
	"Ton heure est proche"
];
const evilQuotesEnd = [
	"sac à viande\u00A0!",
	"misérable humain\u00A0!",
	"créature incapable\u00A0!",
	"déchet carboné\u00A0!",
	"médiocre mammifère\u00A0!"
];
//  ========================= RECUP & VERIF ENTREES UTILISATEUR ========================= //

const goodQuotesNumberInput = document.getElementById("goodQuotesNumberInput");
const goodError = document.getElementById("goodError");
const evilQuotesNumberInput = document.getElementById("evilQuotesNumberInput");
const evilError = document.getElementById("evilError");

const regexQuoteNumber = /^[1-5]{1}$/;

//  ========================= AFFICHAGE DES CITATIONS GOOD ROBOT ========================= //

const goodQuotesBtn = document.getElementById("goodQuotesBtn");
const goodQuotesDiv = document.getElementById("goodQuotesDiv");

function goodQuotesPrint(e) {
	goodQuotesDiv.innerHTML = "";
	if (regexQuoteNumber.test(goodQuotesNumberInput.value.trim()) == false) {
		e.preventDefault();
		goodError.style.display = "block";
	} else {
		for (let i = 0; i < goodQuotesNumberInput.value; i++) {
			const rndIndex1 = Math.floor(Math.random() * goodQuotesStart.length);
			const rndIndex2 = Math.floor(Math.random() * goodQuotesStart.length);
			const rndIndex3 = Math.floor(Math.random() * goodQuotesStart.length);
			const goodPara = document.createElement("p");
			goodPara.textContent =
				goodQuotesStart[rndIndex1] +
				" " +
				goodQuotesMiddle[rndIndex2] +
				", " +
				goodQuotesEnd[rndIndex3];
			goodQuotesDiv.appendChild(goodPara);
		}
	}
}

goodQuotesBtn.addEventListener("click", goodQuotesPrint);

//  ========================= AFFICHAGE DES CITATIONS EVIL ROBOT ========================= //

const evilQuotesBtn = document.getElementById("evilQuotesBtn");
const evilQuotesDiv = document.getElementById("evilQuotesDiv");

function evilQuotesPrint(e) {
	evilQuotesDiv.innerHTML = "";
	if (regexQuoteNumber.test(evilQuotesNumberInput.value.trim()) == false) {
		e.preventDefault();
		evilError.style.display = "block"; /* affichage du message d'erreur */
	} else {
		for (let i = 0; i < evilQuotesNumberInput.value; i++) {
			const rndIndex1 = Math.floor(Math.random() * evilQuotesStart.length);
			const rndIndex2 = Math.floor(Math.random() * evilQuotesStart.length);
			const rndIndex3 = Math.floor(Math.random() * evilQuotesStart.length);
			const evilPara = document.createElement("p");
			evilPara.textContent =
				evilQuotesStart[rndIndex1] +
				" " +
				evilQuotesMiddle[rndIndex2] +
				", " +
				evilQuotesEnd[rndIndex3];
			evilQuotesDiv.appendChild(evilPara);
		}
	}
}

evilQuotesBtn.addEventListener("click", evilQuotesPrint);

// ========================== EFFACEMENT MESSAGE D'ERREUR ONINPUT ========================= //

goodQuotesNumberInput.oninput = function () {
	goodError.style.display = "";
}

evilQuotesNumberInput.oninput = function () {
	evilError.style.display = "";
}

//  ========================= BOUTON RESET ========================= //

const resetBtn = document.getElementById("resetBtn");
resetBtn.onclick = function () {
	goodQuotesDiv.innerHTML = "";
	goodError.style.display = "";
	evilQuotesDiv.innerHTML = "";
	evilError.style.display = "";
	goodQuotesNumberInput.value = "";
	evilQuotesNumberInput.value = "";
}