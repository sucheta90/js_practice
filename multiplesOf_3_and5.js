function solution(number){
    if (number < 0){return 0}
    let multiples = 1;
    let sumOfMultiples = 0;
    while (multiples < number){
        if((multiples%3 == 0) || (multiples % 5 == 0)){
            sumOfMultiples += multiples;
            multiples+= 1;
            
        }
        else{
            multiples+= 1;
        }
    }
    return sumOfMultiples
}




let z = solution(16);
console.log(z)