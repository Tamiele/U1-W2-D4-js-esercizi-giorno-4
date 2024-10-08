// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

function checkArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 5) {
      console.log(array[i], "è maggiore di 5");
    } else {
      console.log(array[i], "non è maggiore di 5");
    }
  }
}
checkArray(numRandom);

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
  { price: 50, name: "Telefono", id: "smart", quantity: 1 },
  { price: 60, name: "palla", id: "cuoio", quantity: 2 },
];

function shoppingCartTotal(shoppingCart) {
  let totalCart = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    let articoli = shoppingCart[i];
    totalCart += articoli.price * articoli.quantity;
  }
  return totalCart;
}
console.log(shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function addToShoppingCart(shoppingCart) {
  shoppingCart.push({
    price: 70,
    name: "giocattolo",
    id: "plastica",
    quantity: 1,
  });

  return shoppingCart.length;
}
console.log(addToShoppingCart(shoppingCart));

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
let testPrice = 0;
function maxShoppingCart(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].price > testPrice) {
      testPrice = array[i].price;
    }
  }
  return testPrice;
}
console.log(maxShoppingCart(shoppingCart));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let ultimoOggetto = null;
const latestShoppingCart = function (array) {
  for (let i = 0; i < array.length; i++) {
    ultimoOggetto = array[i];
  }
  return ultimoOggetto;
};
console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/
// const loopUntil = function (x) {
//   for (let i = 0; i < 3; i++) {
//     let numRundom = Math.floor(Math.random() * 9);
//     if (numRundom > x) {
//       return numRundom;
//     }
//   }
// };
// console.log(loopUntil(5));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
let arrayNum = [5, 4, 7, 2];
const average = function (array) {
  let totalSum = 0;
  let aritmetica = 0;

  for (let i = 0; i < array.length; i++) {
    totalSum += array[i];
    aritmetica = totalSum / array.length;
  }
  return aritmetica;
};
console.log(average(arrayNum));
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
let arrayStr = ["giovanni", "marco", "stefano", "mario"];
const longest = function (arrayStr) {
  let longStr = " ";
  arrayStr.forEach((str) => {
    if (str.length > longStr.length) {
      longStr = str;
    }
  });
  return longStr;
};
console.log(longest(arrayStr));
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
