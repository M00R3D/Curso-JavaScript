

function cuadradoPromise(value) {
    if (typeof(value)!=="number"){return Promise.reject("error el valor usado no es un numero")}
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                value,
                result : value * value
            })
        }, 0|Math.random() *100 );
    })
}

cuadradoPromise("a")
.then(obj => {
    console.log("Inicia el promise");
    console.log(`Value: ${obj.value}   Result: ${obj.result}`);
    return cuadradoPromise(1);
})
.then(obj => {
    console.log("Inicia el promise");
    console.log(`Value: ${obj.value}   Result: ${obj.result}`);
    return cuadradoPromise(2);
})
.then(obj => {
    console.log("Inicia el promise");
    console.log(`Value: ${obj.value}   Result: ${obj.result}`);
    return cuadradoPromise(3);
})
.then(obj => {
    console.log("Inicia el promise");
    console.log(`Value: ${obj.value}   Result: ${obj.result}`);
    return cuadradoPromise(4);
});