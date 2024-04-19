function cuadradoCallback(value,callback) {
    setTimeout(() => {
        callback(value,value*value)
    }, 0|Math.random() *100 );
}

cuadradoCallback(2,(value,result)=>{
    console.log("inicia el callback")
    console.log(`Value:${value}   Result:${result}`)
})

//los callbacks nos sirven para ejecutar alguna funcionalidad un paso despues de realizar la operacion, lo que nos sirve
//para cuando no estamos seguros si la operacion nos regresara un valor o un error etc, para ejecutar despues la funcion callback