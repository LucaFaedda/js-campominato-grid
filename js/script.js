


function generateSquare()
{
    const quadrato = document.createElement('div') // creo un div 
    quadrato.classList.add('square') // al div creato do la classe square
    return quadrato
}


const play = document.getElementById('chek-me')

play.addEventListener('click', function(){
    const grid = document.getElementById('grind') // richiamo da html grid
    
    let number;
    
    for (let i =1 ; i <= 100 ; i++){
    
        number = i
        const box = generateSquare() // qua mi sono creato i vari square
        grid.appendChild(box) // creo un figlio all'interno dell'elemento che vado a selezionare
        box.innerHTML += number
        box.addEventListener('click', function(){
            box.classList.add('yellow')
            console.log(number)
        })
        
    }
    
})