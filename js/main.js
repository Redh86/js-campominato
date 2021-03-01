const mine = 16;

var mineArray = [];
var oneToHun = [];
var ggArray = [];


flowers(mine);
oneHun(1, 100)
oneToHun.pop(mineArray)
console.log(mineArray);
console.log(oneToHun);

function myBtn(){
    for ( i = 0; i < 1; i++){
        utnNum = parseInt(prompt("Inserisci un numero da 1 a 100"));
        if (utnNum != mineArray) {
            alert("Hai perso!")
        } else {
            ggArray.push(utnNum);
            alert("Nessuna Mina")
        }
    }
}


function flowers(sixTeen) {
    for ( i = 1; i < sixTeen + 1; i++){
        mineArray.push(Math.floor(Math.random()*100));
    }
    return mine;
}

function oneHun(minum, max) {
    for ( minum = 1; minum <= max + 1; minum++){
        oneToHun.push(minum);
    }
    return minum;
}