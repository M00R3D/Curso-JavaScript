const numeros =[1,2,3,4]


//Sin la destructuracion

let uno = numeros[0],dos=numeros[1],tres=numeros[2],cuatro=numeros[3]
console.log(uno,dos,tres,cuatro)
//Con la destructuracion

const [one,two,three,four] = numeros
console.log(one,two,three,four)

// Objeto persona
const persona = {
    nombre: 'Juan',
    edad: 30,
    genero: 'masculino',
    profesion: 'ingeniero'
  };
  
  // Sin destructuración
  let nombre1 = persona.nombre;
  let edad1 = persona.edad;
  let genero1 = persona.genero;
  let profesion1 = persona.profesion;
  
  console.log(nombre1, edad1, genero1, profesion1);
  
  // Con destructuración
  const { nombre, edad, genero, profesion } = persona;
  
  console.log(nombre, edad, genero, profesion);