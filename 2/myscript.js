// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito.

var nome = prompt('Come ti chiami?');
console.log(nome);
var sesso = prompt('Maschio o femmina?');
console.log(sesso);

document.getElementById('nome').innerHTML = nome;
document.getElementById('nome').style.color = 'red';
