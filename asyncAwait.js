async function cuadradoAsync(value) {
    if (typeof(value) !== "number") {
        return Promise.reject("Error: el valor usado no es un número");
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 0 | Math.random() * 100);
    });
}

async function ejecutarPromesas() {
    try {
        let obj = await cuadradoAsync("a");
        console.log("Inicia el promise");
        console.log(`Value: ${obj.value}   Result: ${obj.result}`);

        obj = await cuadradoAsync(1);
        console.log("Inicia el promise");
        console.log(`Value: ${obj.value}   Result: ${obj.result}`);

        obj = await cuadradoAsync(2);
        console.log("Inicia el promise");
        console.log(`Value: ${obj.value}   Result: ${obj.result}`);

        obj = await cuadradoAsync(3);
        console.log("Inicia el promise");
        console.log(`Value: ${obj.value}   Result: ${obj.result}`);

        obj = await cuadradoAsync(4);
        console.log("Inicia el promise");
        console.log(`Value: ${obj.value}   Result: ${obj.result}`);
    } catch (error) {
        console.error(error);
    }
}

ejecutarPromesas();
