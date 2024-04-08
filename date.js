console.log(Date())

const date = new Date();

const dayOfMonth = date.getDate();
const dayOfWeek = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();

console.log("Día del mes:", dayOfMonth);
console.log("Día de la semana:", dayOfWeek);
console.log("Mes:", month);
console.log("Año:", year);
console.log("Hora:", hours);
console.log("Minutos:", minutes);
console.log("Segundos:", seconds);
console.log("Milisegundos:", milliseconds);
