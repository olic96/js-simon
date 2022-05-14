// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
//Consigli del giorno:
//* Pensate prima in italiano.
//* Dividete in piccoli problemi la consegna.
//* Individuate gli elementi di cui avete bisogno per realizzare il programma.

//  genero 5 numeri casuali 
//  faccio vizualizzare con un alert i 5 numeri e li rendo visibili per 30 sec  
//  chiedo all'utente di inserire uno alla volta 5 numeri
//  verifico quanti e quali numeri sono stati indovinati

/*---- FUNCTIONS ----*/

/*------ MAIN ------*/

//  creo un array di numeri, creo una variabile nella quale stamperoò i 5 numeri casuali che non potranno essere ripetuti.

const randomNumbers = [];

const numbersHtml = document.querySelector(".numbers");

let randomNumber;

while (randomNumbers.length < 5) {
    randomNumber = Math.floor(Math.random() * 10) + 1; 
    if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
    }
}
console.log(randomNumbers);

numbersHtml.innerHTML = randomNumbers;


// cancello i numeri a schermo

setTimeout(function() {
    numbersHtml.innerHTML = "";
}, 2000);


// creo un array per i numeri che inserirà l'utente, chiedo all'utente di inserire i 5 numeri.

let userNumber;

const userNumbers = [];

setTimeout(function() {
    for(let i = 0; userNumbers.length < 5; i++) {
        userNumber = Number(prompt("Inserisci un numero"));
        userNumbers.push(userNumber);
    }  


    // creo un arrat nel quale inserirò i numeri indovinati tramite un ciclo for che verifichi nei due array la presenza o meno dei numeri inseriti dall'utente.

    const convalidNumbers = [];

    for(let i = 0; i < userNumbers.length; i++) {
        const number = userNumbers[i];
        if(randomNumbers.includes(number) && !convalidNumbers.includes(number)) {
            convalidNumbers.push(number);
        }
    }

    // stampo in pagina il risultato tramite un if.

    if(convalidNumbers.length > 0) {
      alert(`Hai indovinato ${convalidNumbers} `); 
    } else {
        alert("Ritenta");
    }

    console.log(convalidNumbers);
    
}, 3000);

console.log(userNumbers);