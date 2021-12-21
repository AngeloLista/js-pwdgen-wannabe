/*  - Chiedi all’utente il suo nome,
    - poi chiedi il suo cognome,
    - poi chiedi il suo colore preferito
    - Infine scrivi sulla pagina nomecognomecolorepreferito21

    Bonus:
    - scrivere "La tua password è nomecogonomecolorepreferito21"
    - Abbellire la pagina dal punto di vista grafico a piacimento! */

console.log('JS OK');

const firstName = prompt('Qual è il tuo nome?')
const lastName = prompt('Qual è il tuo cognome')
const favouriteColor = prompt('Qual è il tuo colore preferito?')

document.writeln(`La tua password è ${firstName}${lastName}${favouriteColor}21`)
