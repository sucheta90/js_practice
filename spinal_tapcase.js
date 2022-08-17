/** Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/
function spinalCase(str) {
  let arr = [];
  let currPosition= 0;
  // if(/\s|[_]/g.test(str)){
  //   return str.replace(/\s|[_]/g, '-').toLowerCase();
  // }
  for(let i= 1; i < str.length; i++){
    if(str.charCodeAt(i)>=65 && str.charCodeAt(i) <=90)
    {
      arr.push(str.slice(currPosition,i));
      currPosition = i;
    }
  }
  return arr
return str.split(" ");
}

console.log(spinalCase('AllThe-small Things'));
// console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase('thisIsSpinalTap'));

