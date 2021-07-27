



function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min)  
}


var lvdifficolta = prompt("Scegli tra livello di diffoltà 0,1,2");
var rangebombe ;
if(lvdifficolta == 0){
    rangebombe = 100;
} else if(lvdifficolta == 1){
    rangebombe = 80;
} else if(lvdifficolta == 2){
    rangebombe = 50;
}


//Array per le bombe generate casualmente
var bombs = [];
// Ciclo per inserire le bombe nell array 
do {
    numeroRandom(1, rangebombe)
    //Controllo che le bombe non siano uguali
    if (!bombs.includes(numeroRandom(1, rangebombe))){
        bombs.push(numeroRandom(1, rangebombe))
    }
    
} while (bombs.length < 16);
console.log(bombs);

//* Gioco

 var punti = 0;
 var possibilita =   (rangebombe - 16);
 var disinneschi = [];

do {
    //Chiedere all' utente di inserire un numero tra 1 e 100
     var scelta = Number(prompt("Inserisci un numero comreso tra 1 e " + rangebombe ));

    //Verificare se input può essere inserito nell array disinneschi
    if(isNaN(scelta)){
        alert("Devi inserire un numero");

    } else if (scelta < 1 || scelta > rangebombe) {
        alert("Devi inserire  un numero compreso tra 1 e 100");

    } else if (bombs.includes(scelta)){
        alert("BOOOOM! Hai disinnescato " + punti + " bombe");

    } else if (disinneschi.includes(scelta)){
        alert("Numero già inserito");
    } else {
        disinneschi.push(scelta);
        punti = punti + 1;
    }
    console.log(disinneschi);

} while (disinneschi.length < possibilita && !bombs.includes(scelta) )

 if (disinneschi.length == possibilita){
    alert("Complimenti sei un artificiere incredibile!")
}


function creaCampo(celle) {
    for (let i = 1; i<= celle; i++) {
        let cella = `
        <div data-cella="${i}" class="cella">
        `;

        let templateCella = document.createElement('DIV');
        templateCella.classList.add("quadrato");
        templateCella.innerHTML = cella;
        document.getElementById('campo').appendChild(templateCella);
    }
}

document.getElementById('campo').addEventListener('click', 
    function(e)  {
        console.log(e.target.dataset.cella);
        let element = document.querySelectorAll("[data-cella='" + + "']");
        console.log(element[0]);
        element[0].classList.add("red");
    }
)

creaCampo(100);