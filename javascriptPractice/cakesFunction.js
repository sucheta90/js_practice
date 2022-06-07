
function cakes(recipe, available){
    let cake_array = [];
    for (const item in recipe){
        if (item in available){
            if (recipe[item] > available[item]){
                return 0
            }
           else if (recipe[item] < available[item]){
                let numOfCakes = Math.floor(available[item]/recipe[item]);
                cake_array.push(numOfCakes);
                console.log(cake_array)
            }
            else {
                numOfCakes = 1;
                cake_array.push(numOfCakes)
            }
        }
        else {
            return 0;
        }
    }
    if(cake_array.length != 0){
        return Math.min(...cake_array)
    }
    
}









let check = cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
console.log(check);

check = cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {apples: 8, flour: 500, sugar: 500, milk: 1000, oil: 200});
console.log(check);