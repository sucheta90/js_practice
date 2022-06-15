function add(x) {
    return function adda(a) {
        x = x+a;
        return function addb(b) {
            x = x + b;
            console.log(x);
        }
    }
}

add(10)(5)(20)

add(6)(5)(20)
console.log(add)
console.log(add(8))
console.log(add(8)(10))
console.log(add(8)(10)(20))