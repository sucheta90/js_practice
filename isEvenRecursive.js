const isEven = (number) => {
    let current = number
    if (current == 0){
        return true
    }
    else if(current == 1){
        return false
    }
    else if(current < 0){
        return '??'
    }
    else{
        return iseven(number - 2)
    }
}

function my_test(arr_obj) {
    arr_obj.push(9)
}

a = [1,2,3]
b = a
a.push(5)
my_test(a)
my_test(b)
console.log(a)
console.log(b)

function another_test(my_var) {
    my_var++;
    return my_var;
}

let number = 2;
number+=1;
number = another_test(number);
console.log(number);//4
another_test(number);
console.log(number);

