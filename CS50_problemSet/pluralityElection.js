// The function vote takes two arrays of (1)candidate names & (2)votes as arguemnts and counts votes on the number of times the name appeared in the votes array.  
function vote(names,votes){
    let vote_count = {};

    for (let candidate of votes){ 
        if (names.includes(candidate)){
            let count = 0;
             for (let el of votes){
                if (el == candidate){
                    count+= 1;
                }
             }
             vote_count[candidate]= count
        }
        else {
            return false
        }
    }
    
    return printWinner(vote_count)
    
}
// function printWinner takes an object argument to check the candidate with the maximum vote counts and prints the name of the winning candidate.
function printWinner(data){
    let max_votes = Math.max(...(Object.values(data)));
    let winner = [];
    for (let el in data){

        if(data[el] === max_votes){
           winner.push(el)
        }
    }
    return `${winner.toString()} have been declared WINNER!!`
}

let check = vote(['alice','bob','charlie'],['alice','bob','charlie','alice']);
console.log(check);
