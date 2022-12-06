
function generateSquare()
{
    const quadrato = document.createElement('div') // creo un div 
    quadrato.classList.add('square') // al div creato do la classe square
    return quadrato

}

const grid = document.getElementById('grind') // richiamo da html grid

let number;

for (let i =0 ; i < 100 ; i++){

    number = i
    console.log(number)
    const box = generateSquare() // qua mi sono creato i vari square
    console.log(box)
    grid.appendChild(box) // creo un figlio all'interno dell'elemento che vado a selezionare

}

