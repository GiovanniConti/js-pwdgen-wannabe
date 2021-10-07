const usaerName = prompt("Inserisci il tuo nome.");
const userSurname = prompt("Inserisci il tuo cognome");
const userColor = prompt("Inserisci il tuo colore preferito");


// First solution
// alert(`la tua password è: ${usaerName}${userSurname}${userColor}21`);


// alternative solution

const password = usaerName + userSurname + userColor + "21";


alert(`La tua password è: ${password}`)

