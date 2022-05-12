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

const randomNumbers = [];

let randomNumber;

for (let i = 0; randomNumbers.length < 5; i++) {
    randomNumber = Math.floor(Math.random() * 10) + 1; 
    if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
    }
}
console.log(randomNumbers);

const userNumbers = [];

let userNumber;

setTimeout(function() {
    for (let i = 0; userNumbers.length < 5; i++) {
       userNumber = Number(prompt("Inserisci i numeri"));
    } if (!userNumbers.includes(userNumber)) {
        userNumbers.push(randomNumber);
    }
}, 1000);
