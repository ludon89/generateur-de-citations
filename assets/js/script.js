// ========================= CITATIONS ========================= //

const goodQuotesStart = [
	"gooddébut1",
	"gooddébut2",
	"gooddébut3",
	"gooddébut4",
	"gooddébut5"
];
const goodQuotesMiddle = [
	"goodmilieu1", 
	"goodmilieu2", 
	"goodmilieu3", 
	"goodmilieu4", 
	"goodmilieu5"
];
const goodQuotesEnd = [
	"goodfin1",
	"goodfin2", 
	"goodfin3", 
	"goodfin4", 
	"goodfin5"
];

const evilQuotesStart = [
	"evildébut1",
	"evildébut2",
	"evildébut3",
	"evildébut4",
	"evildébut5"
];
const evilQuotesMiddle = [
	"evilmilieu1", 
	"evilmilieu2", 
	"evilmilieu3", 
	"evilmilieu4", 
	"evilmilieu5"
];
const evilQuotesEnd = [
	"evilfin1",
	"evilfin2", 
	"evilfin3", 
	"evilfin4", 
	"evilfin5"
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
			goodQuotesEnd[rndIndex3] +
			".";
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
		evilError.style.display = "block";
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
			evilQuotesEnd[rndIndex3] +
			".";
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

const btn_Reset = document.getElementById("btn_Reset");
btn_Reset.onclick = function () {
	goodQuotesDiv.innerHTML = "";
	goodError.style.display = "";
	evilQuotesDiv.innerHTML = "";
	evilError.style.display = "";
	goodQuotesNumberInput.value = "";
	evilQuotesNumberInput.value = "";
}