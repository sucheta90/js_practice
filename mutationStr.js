function mutation(arr) {
    let str1 = arr[0].toLowerCase().split("").sort();
    
    console.log(str1);
    let compareToArr = arr[1].toLowerCase().split("");
    console.log(compareToArr);
    return str1.includes(compareToArr)
  }
  
  console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));