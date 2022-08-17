function reverseString(input){
    let new_str ="";
    for(let i = input.length-1; i >= 0 ; i--){
        new_str+= input[i];
    }
    return new_str
}

console.log(reverseString('Hello sucheta'));

const x = input => input.length == 1? input: input[input.length-1] + x(input.substring(0,input.length-1))

function rev_str(input) {
    if (input.length == 1){
        return input
    }
    else {
        return input[input.length-1] + rev_str(input.substring(0,input.length-1))
    }
}

console.log(rev_str('Hello sucheta'));