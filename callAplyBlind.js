//CALL // funciona para propiedades especificas(multiples) de distintos objetos
const person1 = { firstName: 'John', lastName: 'Doe' };
const person2 = { firstName: 'Jane', lastName: 'Doe' };

function greet(greeting) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}`);
}

greet.call(person1, 'Hello')
greet.call(person2, 'Hi')

//APPLY // funciona mas para arreglos
const numbers = [1, 2, 3, 4, 5];

function sum() {
    return Array.from(arguments).reduce((acc, val) => acc + val, 0)
}

const total = sum.apply(null, numbers)
console.log(total)


//BIND //mete un objeto
const person = { name: 'Alice' };

function greet() {
    console.log(`Hello, ${this.name}`);
}

const greetPerson = greet.bind(person)
greetPerson()
