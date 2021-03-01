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
    for ( i = 1; i < sixTeen + 1; i++){
        mineArray.push( random = Math.floor(Math.random()*100));
        if ( random == random) {
            random = Math.floor(Math.random()*100)
        }
    }
    return mine;
}
