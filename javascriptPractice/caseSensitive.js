function append() {
    console.log('hello')
}
function caseSensitiveAplabet(alphabets){
    let newArray= [];
    for (let alphabet of alphabets ){
        // console.log(alphabet);
        let alphaNum = alphabet.charCodeAt();
        // console.log(alphaNum);
        
        if (65<= alphaNum && alphaNum <= 90){
            newArray.push(String.fromCharCode(alphaNum+32));
        }
        else if (97<= alphaNum && alphaNum <= 122){
            newArray.push(String.fromCharCode(alphaNum - 32));
        }
       
    }
    return newArray 
}

const x = caseSensitiveAplabet(['a','B','n','M','P','O'])
console.log(x)
