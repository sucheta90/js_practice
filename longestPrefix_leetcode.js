var longestCommonPrefix = function(strs){
    let sorted_array_of_strings = strs.sort((a,b) => {
        if (a.length < b.length) {
            return -1;
        }
        else{
            return 0;
        }
    });
    let commonPrefix = sorted_array_of_strings[0];
    
    for (let i =1; i < sorted_array_of_strings.length; i++){
        commonPrefix = findPrefix(commonPrefix,sorted_array_of_strings[i]);
        if(!commonPrefix) {
            return "";
        }
    }

    return commonPrefix;

}

/**
 * Accepts two arguments and recursively finds out the common prefix of maximum size 
 * @param {*} prefix 
 * @param {*} compareWithStr 
 * @returns the common prefix of maximum size
 */

function findPrefix(prefix, compareWithStr){
    
    if (prefix.length === 0){
        return ""
    }
    else if(compareWithStr.startsWith(prefix)){
        return prefix;
    }
    else{
        
        return findPrefix(prefix.slice(0,prefix.length -1),compareWithStr)
    }

}

let check = longestCommonPrefix(["flower","flow","flight"]);
console.log(check)


let months = ['March', 'Jan', 'Feb', 'Dec'];
months = months.sort((a,b) => {
    if (a.length < b.length) {
        return -1;
    }
    else{
        return 0;
    }
});
console.log(months)