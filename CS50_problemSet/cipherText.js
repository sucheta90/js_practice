function ceaser(plaintext, key = 1){
    let cipherText = "";
    for (let char of plaintext){
        if (char.charCodeAt() >= 65 && char.charCodeAt()<=90){
            if((char.charCodeAt()+ key) > 90){
                cipherText+= String.fromCharCode((((char.charCodeAt()+ key)- 90) % 26)+ (65-1));
            }
            else{
                cipherText+= String.fromCharCode(char.charCodeAt()+ key)
            }
        }
        else if(char.charCodeAt() >= 97 && char.charCodeAt()<= 122){
                if((char.charCodeAt()+ key) > 122){
                    cipherText+= String.fromCharCode((((char.charCodeAt()+ key)-122)% 26)+ (97-1));
                }
                else{
                    cipherText+= String.fromCharCode(char.charCodeAt()+ key)
                }
            
        }
        else cipherText+= char;
    }
    return cipherText
}



console.log(ceaser('be sure to drink your Ovaltine', 13))
console.log(ceaser('Ab', 52))
