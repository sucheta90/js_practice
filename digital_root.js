function digital_root(n){
    let sumOfDigits = 0;
    let eachDigit = 0;
    let quotient = 1; 
    sumOfDigits = findSum(n);
    function findSum(data){
        while(quotient!= 0 ){
            eachDigit = data % 10;
            sumOfDigits+= eachDigit;
            quotient = Math.floor(data/10);
            data = quotient
            console.log(data)
        }
        console.log(sumOfDigits)
     return sumOfDigits   
    }
    if (sumOfDigits > 9){
        quotient = 1;
        eachDigit = 0;
        sumOfDigits = findSum(sumOfDigits);
    }
    else return sumOfDigits
}

function digital_root_recur(number) {
    let number_copy = number;
    let sumOfDigits = 0;
    let eachDigit;
    while(number_copy!=0){
        eachDigit = number_copy%10;
        sumOfDigits+=eachDigit;
        number_copy = Math.floor(number_copy/10);
    }
    if (sumOfDigits > 9) {
        console.log(`sumOfDigits: ${sumOfDigits}, for call ${number}`)
        let x = digital_root_recur(sumOfDigits);
        console.log(`sumOfDigits again: ${sumOfDigits}, for call ${number}`)
        return x;
    }
    else {
        // base condition
        console.log(`sumOfDigits: ${sumOfDigits}, for call ${number}`)
        return sumOfDigits
    }
}


let check = digital_root_recur(942);
console.log(check)
//console.log(digital_root_recur(99));
