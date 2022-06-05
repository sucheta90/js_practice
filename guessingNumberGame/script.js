
function getRandonNumber(){
    return Math.floor((Math.random()*100)+1)
}


// getting a random number
let randNumber = getRandonNumber();
// 
let isGameOver = false;  
// current guess  
let currentGuess = 0;
// previously guessed
let previousGuess = [];
let prevGuess = document.querySelector('#prevGuess')
// guess count
let guessCount = 0;
// input field
let input = document.querySelector('#guesses');
// submit button
const submit= document.querySelector('#submit');
// reset button
const restartBtn = document.querySelector('#reset');
let message = document.querySelector('#message');
let highLow = document.querySelector('#highLow');


submit.addEventListener('click',function(){
    currentGuess = parseInt(input.value)
    previousGuess.push(currentGuess);
    compareNumber();
    // console.log(previousGuess)
    
    // console.log(currentGuess)
})

function compareNumber(){

    if (!isGameOver){
        console.log(currentGuess)
        if(currentGuess !==randNumber && guessCount < 10){
            // if(currentGuess < randNumber){
            //     highLow.textContent = "Number is Low"
            // }
            // else {
            //     highLow.textContent ="Number is high"
                
            // }
            highLow.textContent = currentGuess < randNumber ? "Number is Low" : "Number is high";
            message.textContent = 'Wrong!';
            message.style.color = 'red';
            guessCount+= 1;
        }
        else if (guessCount === 10){
            isGameOver = true;
            message.textContent= 'NO more turns! Please restart the game!'
        }
        else {
            message.textContent="You got it!";
            message.style.color='green'
            // submit.disable = true;
            isGameOver= true;
            highLow.textContent ="BINGO"
        }
        
            
        
    }
}  
        
restartBtn.addEventListener('click',reset)
    
  

function reset(){
    guessCount = 0;
    randNumber = getRandonNumber();
    console.log(randNumber)
    console.log(input.value);
    input.value= "";
    isGameOver = false;
    currentGuess = 0;
    console.log(currentGuess);
    previousGuess = [];
    console.log(previousGuess);
    message.textContent = "";
    highLow.textContent ="";
    

}

    





