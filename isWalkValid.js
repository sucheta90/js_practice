// 
// function returnName(){
//     let firstName ='Adam';
//     let middleName = 'Bryson';
//     let lastName = 'Harrison';

//     let middleInitial = middleName.charAt(0);

//     return console.log(firstName + middleInitial + lastName)
// }

// let x = returnName();
// console.log (x)

function exp(number, power) {
    if (power == 0) {
        return 1;
    }
    return number * exp(number, --power);
}
console.log(exp(2, 0)) // 1
console.log(exp(2,1)); // 2
console.log(exp(2,2)); // 4
console.log(exp(2,3)); // 8