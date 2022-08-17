let voters = {
    voter_1: {
        rank_1:"Alice",
        rank_2:"Bob",
        rank_3:"Charlie"
    },
    voter_2:  {
        rank_1:'Alice',
        rank_2:'Charlie',
        rank_3:"Bob",
    },
    voter_3:{
        rank_1:'Bob',
        rank_2:'Charlie',
        rank_3:"Alice",
    },
    voter_4:{
        rank_1:'Bob',
        rank_2:'Alice',
        rank_3:"Charlie",
    },
    voter_5:{
        rank_1:'Charlie',
        rank_2:'Alice',
        rank_3:"Bob",
    }

    
}
let candidates = ['Alice','Bob','Charlie'];

// function takes two args (voters, candidates) to determine valid vote and returns vote counts as objtect.
function tabulate(voters, candidates){
    let voteCount ={};
    let obj_length = Object.keys(voters).length;
    candidates.forEach(element => {
        for(let obj in voters){
            console.log(voters[obj])
            if (voters[obj][0] === element){
                voteCount.element+= 1;
            }
        }
        
    });
    return voteCount
}


console.log(tabulate(voters,candidates))