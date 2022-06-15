function findPrefix(str1, str2){
    let current = str1;
    let compareWithStr = str2;
    if (current.length > compareWithStr.length){
        let placeHolder = current;
        current = compareWithStr;
        compareWithStr = placeHolder;
    }
    if (current.length === 0){
        return ""
    }
    else if(compareWithStr.startsWith(current)){
        return current;
    }
    else{
        
        return findPrefix(current.slice(0,current.length -1),compareWithStr)
    }

}

console.log(findPrefix("DABC", "ABCD"))