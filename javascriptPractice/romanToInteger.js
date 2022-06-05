function romanToInteger(str){

    let hashTable = {
        'I':1, 'IV':4, 'V':5, 'IX':9, 'X':10, 'L':50, 'C':100, 'D': 500, 'M':1000, 'XL':40, 'XC':90, 'CD':400,'CM':900    };
    
    let length = str.length;
    let i = 0;
    let sum = 0;
    while(i<length){
        let subStr = str.substring(i,i+2);
        if (hashTable[subStr]){
            sum = sum + hashTable[subStr];
            i+= 2;
        } 
        else{
            sum = sum + hashTable[str[i]];
            i+= 1;
        }

        }
    return sum    
    }   
    

let y = romanToInteger('IIV')
console.log(y)

