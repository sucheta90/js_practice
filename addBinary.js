function addBinary(a,b){
    let binaryNum = [];
    let sumOfNumbers = a + b;
    let quotient = 0;
    let rem = 0;

    do {
        rem = sumOfNumbers % 2;
        quotient = Math.floor(sumOfNumbers/2);
        sumOfNumbers = quotient
        binaryNum.unshift(rem);
    } while(quotient != 0)
 
 return binaryNum.join('');  

}

let z = addBinary(3,2);
console.log(z)
