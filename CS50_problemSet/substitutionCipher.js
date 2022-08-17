function substitution(key, plaintext){
    let cipherText = "";
    if(key.length != 26){
        return "Key should have 26 letters"
    }
    else{
        for (let char of plaintext){
            if((char.charCodeAt() >= 65) && (char.charCodeAt() <= 90)){
                cipherText+= key[char.charCodeAt() - 65].toUpperCase()
            }
            else if((char.charCodeAt() >= 97)&&(char.charCodeAt() <= 122)){
                cipherText+= key[char.charCodeAt()- 97].toLowerCase()
            }
            else{
                cipherText+= char;
            }
        }

    }
    return cipherText
}

let check = substitution('VCHPRZGJNTLSKFBDQWAXEUYMOI','HELLO WORLD');
console.log(check)