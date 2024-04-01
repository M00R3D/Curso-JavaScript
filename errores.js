try{
    console.log("En try agregaremos el codigo que queremos evaluar para errores")
    Inexistencia
    console.log("Segundo mensaje try")
}catch(error)
{
    // console.log("En el catch, se ejecutara en caso de que exista cualquier tipo de error al ejecutar el try")
    console.log(error)
}finally
{
    console.log("El finally se ejecutara siempre al final de un try catch")
}


try {
 let numero="X"   
 if(isNaN(numero))
 {
    throw new Error("El caracter introducido no es del tipo numerico")
 }
 console.log(numero*numero);
} catch (error) {
    console.log("Se produjo este error:",error)
}


///DE ESTA MANERA PODEMOS CONOCER E IDENTIFICAR CON ANTICCIPACION POSIBLES ERRORES DEBIDO A LAS FORMAS
//EN QUE SE NOS VAYAN A ENVIAR LOS DATOS Y SE HACE MAS FACIL SU SOLUCION
