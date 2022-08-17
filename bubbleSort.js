function bubbleSort(arr){
    let unsorted_index_until = arr.length -1; 
    let sorted = false;
    let temp = 0;
    while (!sorted){
        sorted = true;
        for (let i = 0; i < unsorted_index_until; i++){
            if (arr[i] > arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                // arr[i] = arr[i+1] + arr[i]; 
                // arr[i+1] = arr[i] - arr[i+1];
                // arr[i] = arr[i] - arr[i+1];
                sorted = false;
            }
        }
        unsorted_index_until-=1;
    }
    return arr
}


console.log(bubbleSort([80,9,-100,1,-200,10]))
console.log(bubbleSort([100,19,600,-1000,-200,10]))
console.log(bubbleSort([5,9,-7,1,-6,3]))
console.log(bubbleSort([-50,-99,-100,-1000,1,10]))