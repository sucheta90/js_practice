function spinalCase(str) {
    // let arr = [];
    // let currPosition= 0;
    let strArr = str.split('');
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i].match(/[A-Z]/) && i != 0){
            strArr.splice(i,0,'-');
            i++
        }
        else if(strArr[i]=== " " || strArr[i]=== '_' ){
            strArr.splice(i,1,'-');
            i++;
        }
        // else if(strArr[i]=== /[A-Z]/){
            
        // }
    }
  


return strArr.join("")



}

console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("AllThe-small Things"));
