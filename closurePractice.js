function printHelloCallTimes(number){
    let counter = number;
    return ()=> {
        if (counter > 0){
            console.log('Hello');
            counter--;
        }
        else{
            console.log('Exceeded limit!')
        }
        
    }
    

}

let check = printHelloCallTimes(5);
check()
check()
check()
check()
check()
check()
check()
check()
 console.log("*************************")

let another = printHelloCallTimes(0);
another()
another()