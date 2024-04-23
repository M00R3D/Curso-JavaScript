const set = new Set(["a","b",3,4,true,false,null])
// // console.log(set)
// console.log(set.size)


const set2 = new Set()
set2.add("x")
set2.add("y")
set2.add("z")
set2.add(1)
set2.add(1)
set2.add(true)
set2.add({})

let item
console.log("recorriendo el set 1")
for (item of set) {
    console.log(item)
}


console.log("recorriendo el set 2")
set2.forEach(item => {
    console.log(item)
})

let arr = Array.from(set2)
console.log(arr)

