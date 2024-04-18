setTimeout(() => {
    console.log("ejecucion del settimeout1")
}, 1000);
setTimeout(() => {
    console.log("ejecucion del settimeout2")
}, 2000);
setTimeout(() => {
    console.log("ejecucion del settimeout3")
}, 3000);

let count = 0

const intervaloA =setInterval(() => {
    if(count<=10)
    {
        console.log(`ejecucion del setInterval cada segundo, veces ejecutado:${count}`)
        count++
    }else{clearInterval(intervaloA)}
}, 100);