function scrabble(word_1, word_2){
    let points_word1 = computePoints(word_1);
    let points_word2 = computePoints(word_2);

    
    if(points_word1 > points_word2){
        return `${word_1} is the winner!`
    }
    else if(points_word1 == points_word2){
        return "It's a TIE!"
    }
    else return `${word_2} is the winner!`
}
    

function computePoints(data){
    let pointsArray = [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10];
    data = data.toUpperCase();
    let points= 0;
    for (let char of data){
        if(char.charCodeAt() >= 65 && char.charCodeAt() <= 90){
            points+= pointsArray[(char.charCodeAt() - 65)];
           
        }
        else { 
            points+= 0;
            
        }

    }
    return points
}



let check= scrabble('question!','Question*');
console.log(check)

// let wordScore = computePoints('?');
// console.log(wordScore)

