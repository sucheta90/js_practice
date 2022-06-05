function isPangram(string){
    string = string.toLowerCase();
    let arrayOfPassedString = string.split('');
    let uniqueCharacters = new Set(arrayOfPassedString);
    let count = 0;
    for (let element of uniqueCharacters){
        if (element.charCodeAt(0) <= 122 && element.charCodeAt(0)>=97){
            count += 1;
        }
    }
    if(count == 26){
        return true
    }
    else{
        return false
    }
    
}

let check = isPangram('The quick brown fox jumps over the lazy dog');
console.log(check)

check = isPangram('abcdefghijklmnopqsrtuvxwzy');
console.log(check)

let x = Number(12)
console.log(x.toString(16))

//console.log(Number.toString(16))

console.log(Number.isInteger(x))
