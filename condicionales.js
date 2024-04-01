let edad=17

if (edad>=18) 
{
    console.log("eres mayor de edad")
} else 
    {
        console.log("eres menor de edad")
    }

if (edad>17) 
{
    console.log("eres mayor de edad")
} else 
    {
        console.log("eres menor de edad")
    }

if (edad<=17) 
{
    console.log("eres menor de edad")
} else 
    {
        console.log("eres mayor de edad")
    }
    
if (edad<18) 
{
    console.log("eres menor de edad")
} else 
    {
        console.log("eres mayor de edad")
    }



if(edad<=12)
{
    console.log("eres muy joven para tener tu primer empleo")
}else if (edad>=13 && edad <=18)
    {
     console.log("estas a buena edad de tener un primer empleo")
    }
else if (edad>=19 && edad <=22)
    {
     console.log("ya deberias haber tenido un empleo")
    }
 else
    {
     console.log("porfavor apresurate a conseguir ese empleo")
    }



///OPERADORES TERNARIOS 

///Variable=(condicion) ? EnCasoDeVerdadero : EnCasoDeFalso

let mayorEdad = (edad>=18)? "Eres mayor" : "Aun no eres mayor"
console.log("Ternario:",mayorEdad);


///SWITCH CASE

let caso=5

switch (caso) {
    case 3:
        console.log("el caso es 3");
    break;
    case 4:
        console.log("el caso es 4");
    break;
    case 5:
        console.log("el caso es 5");
    break;
    default:
        console.log("el caso es irregular");
    break;
}