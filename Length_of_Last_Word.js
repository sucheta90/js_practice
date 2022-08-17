var lengthOfLastWord = function(s) {
    s = s.trim();
    let s_array = s.split(" ");
    // console.log(s_array)
    return s_array[s_array.length -1].length;
    // return s_array[s_array.length -1].length;
    
};

let check= lengthOfLastWord("   fly me   to   the moon  ");
console.log(check)

