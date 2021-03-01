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



flowers(mine);
console.log(mineArray);


function myBtn(){
    for ( i = 0; i < 1; i++){
        utnNum = parseInt(prompt("Inserisci un numero da 1 a 100"));
        if (arrayContain(utnNum, mineArray)) {
            alert("Hai perso!")
        } else {
            alert("Nessuna Mina")
        }
    }
}


function arrayContain(num, array){
    for (i = 0;  i < array.length; i++){
        if (num == array[i]) {
            return true
        }  
    }   
    return false
}

function flowers(sixTeen) {
    for ( i = 1; i <= sixTeen; i++){
        random = Math.floor(Math.random()*100 + 1);
        if (random == random){
            random = random;
        }
        mineArray.push(random);
    }
    return mine;
}
