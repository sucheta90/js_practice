function checkCreditCard(inputString){
    let sumOfEachDigits = 0;
    let flag = false;
    for (let i = inputString.length-1;  i >= 0; i -= 1) {
        if (!flag) {
            sumOfEachDigits += parseInt(inputString[i]);
            flag = true;
        } else {
            sumOfEachDigits += sumOfextractedDigits(parseInt(inputString[i])*2)
            flag = false;
        }
    }
    console.log(sumOfEachDigits);
    // productArray.forEach((el) => {
    //     if (el > 9){
    //         sumOfEachDigits+= sumOfextractedDigits(el);
    //     }
    //     else{
    //         sumOfEachDigits+= el ;
    //     }
    // })
    
    console.log(sumOfEachDigits);

    if (sumOfEachDigits % 10 == 0){
        return 'Credit card is valid'
    }
    else return 'invalid'

}

const sumOfextractedDigits = (data) => (data % 10) + Math.floor(data/10)
   

let check = checkCreditCard("4532001678009200");
console.log(check)
console.log(checkCreditCard("4003600000000014"));