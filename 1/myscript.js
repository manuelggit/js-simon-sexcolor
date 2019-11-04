// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati;

// genero 5 numeri casuali e li metto in un array

var daIndovinare = []; // dispongo l'array vuoto
var numeriGiocati = []; // numeri giocati dall'utente

var giocata; // il numero giocato dall'utente dopo i 30 secondi

for (i = 0; i < 5; i++){
  var numero = numRandom(1,1000); // invoco la funzione (da 1 a 1000 per comodità)
  console.log(numero);
  daIndovinare.push(numero);
}
console.log(daIndovinare);
alert(daIndovinare); // li metto in un alert

// faccio passare 30 secondi

setTimeout(parseIntPrompt, 3000);

function parseIntPrompt(){
  for(j=0; j < 5; j++){
    giocata = parseInt(prompt('Inserisci un numero'));
    console.log(giocata);
    numeriGiocati.push(giocata);
  }
  console.log(numeriGiocati);
}

// faccio comparire 5 prompt


// metto questi 5 numeri in un array

// vedo quali e quanti sono uguali

// FUNZIONI

// funzione random
function numRandom(min, max) {
  // il computer genera il suo numero
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
