let aleatorio= Math.round(Math.random()*100 + 5)
const objUsers={
    propiedad:"valor",
    [`id_${aleatorio}`]:aleatorio
}
console.log(objUsers)

const users=["goku","vegeta","jason","job"]
users.forEach((usuario,index)=> objUsers[`id_${index}`]=usuario)
console.log(objUsers)