// consegna:
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota:
// Non è necessario provvedere alla validazione delle email

const email = ['a@gmail', 'b@gmail', 'c@gmail', 'd@gmail', 'e@gmail']

const userEmail = prompt ("inserisci la tua email")

let isUserMailInList = false

for(let i = 0; i < email.length; i++) {
 if(userEmail === email[i]){
    isUserMailInList = true
 }
}

if(isUserMailInList){
    console.log('La tua mail è presente in lista!')
}
else {
    console.log('Purtroppo la tua mail non è presente in lista!')
}
    