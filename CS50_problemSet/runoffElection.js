let voters = {
    voter1: [ 'alice', 'bob', 'charlie' ],
    voter2: [ 'alice', 'charlie', 'bob' ],
    voter3: [ 'bob', 'charlie', 'alice' ],
    voter4: [ 'bob', 'alice', 'charlie' ],
    voter5: [ 'charlie', 'alice', 'bob' ]
  };
  //let candidates = ['alice','bob','charlie'];
  let candidates = 
    {
        'alice': 0,
        'bob': 0,
        'charlie': 0
    }

/**
 * This is the master function that takes 2 arguments candidates(array of names of candidates) and an object(object of arrays of voters peference) 
 * @param {array} candidates 
 * @param {object} data 
 * @returns 
 */
function runOff(voters){
    let totalVotes = Object.keys(voters).length;
    for (let candidate in candidates) {
        candidates[candidate] = tabulate(candidate, voters) 
    }
    
    for (let el in candidates){
        if (candidates[el] > Math.floor(totalVotes/2)){
            console.log('check inside for winner')
            return printWinner(el)
        }
    }
    

   return min_vote(candidates)
  
    
}
  

//function takes arguments= 1) Candidate vote count, 2) Initial Voters list to get min vote
function min_vote(candidateVotes){
    let minimum = Math.min(...Object.values(candidateVotes));
    let min_candidate = [];
    for(let element in candidateVotes){
        if (candidateVotes[element]== minimum){
            min_candidate.push(element)
        }
        
    }
    return elimination(min_candidate,voters)
}


// function elimination(minimum,voter list)
/**
 * 
 * @param {string} name of candidate
 * @param {object} data (initial voters list)
 * @returns 
 * 
 */
    function elimination(data,voters){
        for (let element of data){
            for(let voter in voters){
                if(voters[voter][0]=== element){
                    voters[voter].shift();  
                } 

            }
            
        }
        return runOff(voters)
    }
    

// Function takes candidate name and an object(voters), with their preferences.
function tabulate(name, voters){
    let count= 0;
    for (let element in voters){
        if (voters[element][0]== name){
            count+= 1;
        }
    }
    return count
}

// Prints winner
function printWinner(data){
    return `${data} is the winner!!`
}
//function accepts argument (an array of arrays) to return an object VOTERs, along with Candidates ranked by preference.
// function votersList(data){
//     let list_obj={};
//     let num = 1;
//     data.forEach(element => {list_obj[`voter${num}`] = element
        
//         num+= 1;
        
//     });

//     return list_obj
// }

// console.log(runOff(,voters))
// console.log(minVotes({alice: 3, bob: 5, charlie: 1}))
// ['bob','charlie','alice']
// console.log(votersList([['alice','bob','charlie'],['alice','charlie','bob'],['bob','charlie','alice'],['bob','alice','charlie'],['charlie','alice','bob']]))
// let voters = {
//     voter1: [ 'alice', 'bob', 'charlie' ],
//     voter2: [ 'alice', 'charlie', 'bob' ],
//     voter3: [ 'bob', 'charlie', 'alice' ],
//     voter4: [ 'bob', 'alice', 'charlie' ],
//     voter5: [ 'charlie', 'alice', 'bob' ]
//   }
// console.log(elimination('charlie',voters))

console.log(runOff(voters))