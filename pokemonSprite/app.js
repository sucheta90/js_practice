// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.querySelector('#container');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for(let i = 1 ; i < 153; i++){
    const newDiv = document.createElement('div');
    const newImg = document.createElement('img');
    const numbers = document.createElement('span')
    newImg.src= `${baseUrl}${i}.png`
    numbers.innerText=(`#${i}`)
    
    newDiv.style.display=('inline-block');
    newDiv.appendChild(newImg)
    newDiv.appendChild(numbers)
    numbers.style.alignText=('center')
    newDiv.classList.add('eachPokemon')
    container.appendChild(newDiv)
}

