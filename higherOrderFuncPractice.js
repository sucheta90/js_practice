function another(z){
    labels.push(`Unit ${z+ 1}`)
}
function repeat(n, action){
    for(let i =0; i < n; i++){
        action(i);
    }
}

let labels = [];
repeat(5, (z) => {
    labels.push(`Unit ${z+ 1}`)
});
repeat(5, another)
console.log(labels)
