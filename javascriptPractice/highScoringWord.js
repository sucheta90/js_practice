function highScoringWord(inputString){
    let lowerCaseString= inputString.toLowerCase();
    let words = lowerCaseString.split(' ')
    const score_obj = {};
    let score = 0;
    let maxScore = 0;
    let word_maxScore = '';

    for (let word of words){
        score = findScore(word);
        score_obj[word] = score;
        if (score > maxScore){
            maxScore = score;
            word_maxScore = word;
        }

        
    }
    
    return word_maxScore
}


function findScore(data){
    const relative_value =96
    let wordScore = 0;
    for (let i =0; i < data.length; i++){
        let letterScore = data[i].charCodeAt() - relative_value;
        wordScore+= letterScore;
    }
    return wordScore
}








let check = highScoringWord('what time are we climbing up the volcano');
console.log(check);

// let check2 = findScore('what');
// console.log(check2)