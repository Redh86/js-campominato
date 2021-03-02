// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di 
// inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, 
// la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” 
// o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha inserito un numero consentito.

const mine = 16;

var mineArray = [];
var ggArray = []

var tentativi = ( 100 - mine )

while (mineArray.length < mine) {
    var generateMine = flowers(1, 100);
    if (arrayContain(generateMine, mineArray) == false){
        mineArray.push(generateMine)
    }
}
console.log(mineArray);
var lose = false;

while ((ggArray.length < 84) && (lose == false)) {
    do {
        var utnNum = parseInt(prompt("Inserisci un numero da 1 a 100"));
    } while (isNaN(utnNum) || (utnNum < 0) || (utnNum > 100));
    lose = false
    if (arrayContain(utnNum, mineArray)) {
        alert("Hai perso!");
        lose = true;
    } else if (arrayContain(utnNum, mineArray) == false) {
        alert("Nessuna Mina");
        ggArray.push(utnNum);
    } else if (arrayContain(utnNum, ggArray)) {
        alert("Numero gia inserito, riprova.");
    } else if ( ggArray.length == 84) {
        alert("Hai vinto");
    }
    i++
}

console.log(ggArray.length);
alert("Hai totalizzato " + ggArray.length + " punti!");

// FUNZIONI



function arrayContain(num, array){
    for (i = 0;  i < array.length; i++){
        if (num == array[i]) {
            return true
        }  
    }   
    return false
}

function flowers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}