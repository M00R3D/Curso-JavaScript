// const str = 'Hello'
// const iterator = str[Symbol.iterator]()
    // const map = new Map()
    // map.set('a', 1)
    // map.set('b', 2)
// const set = new Set([1, 2, 3])
// const iterator = set.values()
let array = [1, 2, 3, 4, 5]

let arrayIterator = array[Symbol.iterator]()
let next = arrayIterator.next()

const inter =setInterval(() => {
    while (!next.done) {
        console.log(next.value)
        next = arrayIterator.next()
    }    
}, 2000);
