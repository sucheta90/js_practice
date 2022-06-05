function checkValidParenthesis(s){
    const hashtable = {')':'(','}':'{',']':'[' };
    let array = [];
    for (let i = 0; i < s.length ; i++){
        if(!hashtable[s[i]]){
            array.push(s[i]);
        }
        else {
            if (hashtable[s[i]]=== array[array.length -1]){
                array.pop();
                continue    
            }
            else{
                return false
            }
        }
    }
    if (array.length == 0){
        return true
    }
    else{ 
        return false
    }

}


let x = checkValidParenthesis('{[({})]')
console.log(`{[({})] is false and return value is ${x}`)

x = checkValidParenthesis('{[({})]}')
console.log(`{[({})]} is true and return value is ${x}`)

x = checkValidParenthesis('{[({})]}{}[]')
console.log(`{[({})]}{}[] is true and return value is? ${x}`)

x = checkValidParenthesis('}[]')
console.log(`}[] is false and return value is ${x}`)

x = checkValidParenthesis('{')
console.log(`{ is false and return value is ${x}`)
