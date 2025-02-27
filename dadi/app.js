// consegna:
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Bonus
// Invece di generare il numero random per l'utente, chiedilo con un prompt!


let pcRanNum = (Math.floor( Math.random() * 6 + 1 ))
console.log(`'il numero randomico del pc è ${pcRanNum}`)

let userRanNum = (Math.floor( Math.random() * 7 ))
console.log(`'il tuo numero randomico è ${userRanNum}`)

if(userRanNum > pcRanNum){
    console.log('Complimenti, hai vinto!')
}else {
    console.log('Hai perso!')
}


// bonus

let pcRanNumTwo = (Math.floor( Math.random() * 6 + 1))
console.log(`'il numero randomico del pc è ${pcRanNum}`)

let userNum = Number(prompt('inserisci un umero da 1 a 6'))

if(userNum ==isNaN || userNum<=6){
    if(userNum > pcRanNumTwo){ console.log('Complimenti, hai vinto!') }
    else{console.log('Hai perso!')}
}else{
    console.log('il numero inserito non è valido, riprova.')
}






