let person = {};
person.name = "Chikoo";
person.speak = function(line){
    console.log(`The person says, my name is ${this.name}, ${line}`)
}

person.speak('I am great.');

function multiply(){
    console.log(this.numbers.map(n=> n * this.factor));
}

multiply.call({numbers: [2,3,4], factor: 5});

function speak(line){
    console.log(`The ${this.type} rabbit says ${line}.`)
}

let protoRabbit ={
    speak(line){
        console.log(`The ${this.size} ${this.type} rabbit says ${line}.`);
    }
}

let killerRabbit = Object.create(protoRabbit);
killerRabbit.size= 'small';
killerRabbit.type  = 'killer';
killerRabbit.speak('Heyyyyy');


