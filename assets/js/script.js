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

const usr_GoodNbQuotes = document.getElementById("usr_GoodNbQuotes");
const goodErrorNbQuotes = document.getElementById("goodErrorNbQuotes");
const regexNbQuotes = /^[1-5]{1}$/;

//  ========================= AFFICHAGE DES CITATIONS ========================= //

const btn_GoodQuotes = document.getElementById("btn_GoodQuotes");
const div_GoodQuotes = document.getElementById("div_GoodQuotes");

	function printGoodQuotes(e) {
	div_GoodQuotes.innerHTML = "";
	if (regexNbQuotes.test(usr_GoodNbQuotes.value.trim()) == false) {
		e.preventDefault();
		console.log("erreur");
		goodErrorNbQuotes.style.display = "block";
	} else {
		for (let i = 0; i < usr_GoodNbQuotes.value; i++) {
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
		div_GoodQuotes.appendChild(goodPara);
		}
	}
	}

btn_GoodQuotes.addEventListener("click", printGoodQuotes);

// ========================== EFFACEMENT MESSAGE D'ERREUR ONINPUT ========================= //

usr_GoodNbQuotes.oninput = function () {
	goodErrorNbQuotes.style.display = "";
}

//  ========================= BOUTON RESET ========================= //

const btn_Reset = document.getElementById("btn_Reset");
btn_Reset.onclick = function () {
	div_GoodQuotes.innerHTML = "";
	goodErrorNbQuotes.style.display = "";
}

