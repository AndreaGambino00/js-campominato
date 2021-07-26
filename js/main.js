



//Genera un numero casuale tra un min ed  un max
function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min)  
}

//Array per le bombe generate casualmente
var bombe = [];
// Ciclo per inserire le bombe nell array 
do {
    numeroRandom(1, rangebombe)
    //Controllo che le bombe non siano uguali
    if (!bombe.includes(numeroRandom(1))){
        bombe.push(numeroRandom(1))
    }
    
} while (bombe.length < 16);
console.log(bombe);

var punti = 0;
var possibilita =   (rangebombe - 16);
var disinneschi = [];