function convertHTML(str) {
    let htmlObj={
      '&': '&amp;',
      '<':"&lt;",
      '>':'&gt;',
      '"':"&quot;",
      "'": '&apos;'
    }
    let strArr = str.split("");
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] === '&'){
            strArr.splice(i,1,htmlObj[strArr[i]])
        }
        else if(strArr[i] === '>'){
            strArr.splice(i,1,htmlObj[strArr[i]])
        }
        else if(strArr[i] === '<'){
            strArr.splice(i,1,htmlObj[strArr[i]])
        }
        else if(strArr[i] === '"'){
            strArr.splice(i,1,htmlObj[strArr[i]])
        }
        else if(strArr[i] === "'"){
            strArr.splice(i,1,htmlObj[strArr[i]])
        }

    }
    return strArr.join("")
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("<>"))