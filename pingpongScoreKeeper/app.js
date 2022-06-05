// const container = document.querySelector('#container');

// const p1Scored = document.querySelector('#player1');

// const p2Scored = document.querySelector('#player2');

// const topScore = document.querySelector('#topScore');

// // const countUpto = playingTo.value; 
// let p1Score= 0;
// let p2Score= 0;
// let winningScore = 0;
// let isGameOver = false;

// topScore.addEventListener('change',function() {
//     winningScore = parseInt(topScore.value);
//     console.log(winningScore);
// })

// const resetBtn = document.querySelector('#reset');
// // resetBtn.addEventListener('click',function(){
// //     if (isGameOver=== true){
// //         p1Scored.textContent = 0;
// //         p2Scored.textContent = 0;
        
// //     }
// // })

// const p1ScoreBtn = document.querySelector('#p1Score');
// p1ScoreBtn.addEventListener('click',function(){
//     if (!isGameOver){ 
//         p1Score+= 1;
//         if (winningScore === p1Score){
//             isGameOver = true;
//         }
//         p1Scored.textContent= p1Score; 
//          } 
//     })
    

   
// const p2ScoreBtn = document.querySelector('#p2Score');
// p2ScoreBtn.addEventListener('click',function(){
//     if (!isGameOver){
//         p2Score+= 1;
//         if (winningScore=== p2Score){
//             isGameOver = true;
//     }
//     p2Scored.textContent= p2Score;}
// }, update_player_score)

const containerID = '#container'

const container = document.querySelector(containerID);
// player 1
const player1 = document.querySelector('#player1_span');
// player 2
const player2 = document.querySelector('#player2_span');


const topScore = document.querySelector('#topScore');

let winningScore = parseInt(topScore.value);
let isGameOver = false;

topScore.addEventListener('change',function() {
    winningScore = parseInt(topScore.value);
    reset();
    player1.className='has-text-black-bis'
    player2.className='has-text-black-bis'
});
update_player_score = function () {
    player_span_id = `#${this.id.split('_')[1]}_span`
    score_board = document.querySelector(player_span_id);
    current_score = parseInt(score_board.textContent)
    if (!isGameOver){
        current_score+= 1;
        if (winningScore === current_score){
            if (player_span_id == '#player1_span'){
                player2.className='has-text-danger	';
            }
           else{
                player1.className= 'has-text-danger	';
            }
            console.log(player_span_id);
            console.log(player1);
            console.log(player2);

            score_board.className='has-text-primary	'
            isGameOver = true;}
        
        console.log(winningScore)
        score_board.textContent = current_score;
    }
}

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click',function(){
    reset();
    winningScore = topScore.value = 3;
    let p1ScoreBoard = document.querySelector('#player1_span');
    p1ScoreBoard.className= 'has-text-black-bis';
    let p2ScoreBoard = document.querySelector('#player2_span');
    p2ScoreBoard.className ='has-text-black-bis';


})
    

const p1ScoreBtn = document.querySelector('#score_player1');
p1ScoreBtn.addEventListener('click',update_player_score)
   
const p2ScoreBtn = document.querySelector('#score_player2');
p2ScoreBtn.addEventListener('click',update_player_score)




function reset(){
    isGameOver = false;
    console.log(isGameOver);
    let p1ScoreBoard = document.querySelector('#player1_span');
    p1ScoreBoard.textContent = 0;
    let p2ScoreBoard = document.querySelector('#player2_span');
    p2ScoreBoard.textContent = 0;
    // winningScore = topScore.value = 3;

}





