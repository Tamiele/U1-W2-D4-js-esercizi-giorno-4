/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  return l1 * l2;
}
console.log(area(2, 2));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1, num2) {
  if (num1 === num2) {
    console.log((num1 + num2) * 3);
  } else {
    console.log(num1 + num2);
  }
}

crazySum(2, 2);

/*function crazySum(num1, num2) {         
  if (num1 == num2) {                             
    return num1 + num2 * 3;
  } else {
    return num1 + num2;
  }
}
console.log(crazySum(2, 2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff() {}
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(numintero) {
  if (numintero >= 20 && numintero <= 100) {
    console.log(true);
  } else if (numintero === 400) {
    console.log(true);
  } else {
    console.log(false);
  }
}
boundary(500);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(stringa) {
  if (stringa.startsWith("Epicode")) {
    return stringa;
  } else {
    return "Epicode" + " " + stringa;
  }
}
console.log(epify("Epicode"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(positiveNum) {
  if (positiveNum < 0) {
    return "il numero non è positivo";
  } else if (positiveNum % 3 === 0) {
    return "il numero è un multiplo di 3";
  } else if (positiveNum % 7 === 0) {
    return "il numero è un multiplo di 7";
  } else {
    return "non è un multipolo di 3 o di 7";
  }
}
console.log(check3and7(7));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("ciao"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(str) {
  return str.slice(1, -1);
}
console.log(cutString("ciao, chi sei"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
const numRandom = [];
function giveMeRandom(n) {
  for (let i = 0; i < n; i++) {
    numRandom.push(Math.floor(Math.random() * 10));
  }
  return numRandom;
}
console.log(giveMeRandom(5));

/* SCRIVI QUI LA TUA RISPOSTA */
