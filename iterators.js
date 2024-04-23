let array = [1, 2, 3, 4, 5];

let arrayIterator = array[Symbol.iterator]();
let next = arrayIterator.next();

const inter =setInterval(() => {
    while (!next.done) {
        console.log(next.value);
        next = arrayIterator.next();
    }    
}, 2000);
