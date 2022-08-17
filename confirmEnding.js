function confirmEnding(str, target){
    let myRegex = new RegExp(`${target}$`,'g');
    console.log(myRegex);
    if(myRegex.test(str)=== true){
        return true
    }
    else return false

}


let check = confirmEnding("Connor", "n");
console.log(check)