/**This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three())); */

 function zero(arg) {
    if (arg) {
        return evaluation(arg,0)
    }
    return 0
  }
  function one(arg) {
    if (arg) {
        return evaluation(arg,1)
    }
    return 1
  }
  
  function two(arg) {
    if (arg) {
        return evaluation(arg,2)
    }
    return 2
  }
  
  function three(arg) {
    if (arg) {
        return evaluation(arg,3)
    }
    return 3
  }
  function four(arg) {
    if (arg) {
        return evaluation(arg,4)
    }
    return 4
  }
  function five(arg) {
    if (arg) {
        return evaluation(arg,5)
    }
    return 5
  }
  function six(arg) {
    if (arg) {
        return evaluation(arg,6)
    }
    return 6
  }
  function seven(arg) {
    if (arg) {
        return evaluation(arg,7)
    }
    return 7
  }
  function eight(arg) {
    if (arg) {
        return evaluation(arg,8)
    }
    return 8
  }
  function nine(arg) {
    if (arg) {
        return evaluation(arg,9)
    }
    return 9
  }
  
  function plus(arg) {
    return `+ ${arg}`
  }
  function minus(arg){
    return `- ${arg}`
  }
    
  
  function times(arg) {
    return `* ${arg}`
  }
    
  function dividedBy(arg) {
    return `/ ${arg}`
 }

 function evaluation(data, num){
    let newStr = data;
    if(newStr.startsWith('/')){
        return (Math.floor(eval(`${num} ${newStr}`)))
    }
    return (eval(`${num} ${newStr}`))
 }

 