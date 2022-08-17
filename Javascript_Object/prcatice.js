// Methods : Methods are properties that hold function values.
// Prototypes: Prototypes are the mechanism by which JavaScript objects inherit features from one another.
// Class: A class defines the shape of a type of object—what methods and properties it has. Such an object is called an instance of the class.
obj = {"name": "Sucheta"}
obj.type = 34
console.log(obj)

obj2 = {"name": "Pritam"}

function say_hello_to(){
    console.log(this.name)
}
//say_hello_to.toString = () => "Iam to string representation of say_hello_to"
say_hello_to("Su")

// call is a utility method available to function objetcs
say_hello_to.call(obj)
say_hello_to.call(obj2)

console.log(say_hello_to) 
console.log(say_hello_to.toString())

say_hello_to.new_method = function() {
    console.log(`${this} called`)
}

say_hello_to.new_method()
