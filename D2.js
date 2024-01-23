/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
console.log("es1");
const a = 5;
const b = 10;

console.log(a,b);
if (a>b){
  console.log("il numero più grande è " + a);
} else{
  console.log("il numero più grande è " + b);
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

console.log("es2");

const x = 4;
if (x!==5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

console.log("es3");

const y = 50;
if(y % 5===0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

console.log("es4");

const p = 17;
const q = 9;

if(p  === 8 || q === 8 || p + q  === 8  || p - q === 8){
  console.log("è verificato");
} 


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

console.log("es5");

let totalShoppingCart = 100
console.log("totalShoppingCart");
if (totalShoppingCart >= 50){
  console.log ("freecheckout " + totalShoppingCart); 
}else{
  console.log ("10 euro di spedizione "+ (totalShoppingCart + 10))
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

console.log("es6");

let blackFriday = 0.2;
totalShoppingCart = 40


if (totalShoppingCart >= 50){
  console.log ("freecheckout " + (totalShoppingCart - (totalShoppingCart*blackFriday))); 
}else{
  console.log ("10 euro di spedizione "+ (totalShoppingCart - (totalShoppingCart*blackFriday) + 10));
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

console.log("es7");
const num1 = 10;
const num2= 20; 
const num3 = 30;

console.log("prima " + num1 + "\t" + num2 + "\t" + num3);

// num1 num2 num3*     num1 num3 num2*    num2 unm1 num3    num2 num3 num1   num3 num1 num2*   num3 num2 num1

if(num1>num2){
  if(num1 > num3){
    if(num2>num3){
      console.log("dopo " + num1 + "\t" + num2 + "\t" + num3);
    } else{
      console.log("dopo " + num1 + "\t" + num3 + "\t" + num2);
    } 
  } else {
    console.log("dopo " + num3 + "\t" + num1 + "\t" + num2);
  }
} else {
  if(num2 > num3){
    if(num1 > num3){
      console.log("dopo " + num2 + "\t" + num1 + "\t" + num3);
    } else {
      console.log("dopo " + num2 + "\t" + num3 + "\t" + num1);
    }
  } else {
    console.log("dopo " + num3 + "\t" + num2 + "\t" + num1);
  }
}



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
console.log("es8");

let aa = 50; 
if(typeof(aa) == "number"){
  console.log("il valore fornito è un numero");
} else{
  console.log("il valore fornito non è un numero")
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
const bubba = 7
if (bubba % 2 === 0) {
  console.log(bubba , "è pari");
} else{
  console.log(bubba , "è dispari");
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const numbers = []
numbers.push(1,2,3,4,5,6,7,8,9,10)
console.log(numbers)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numbers.pop()
numbers.push(100)
console.log(numbers)
