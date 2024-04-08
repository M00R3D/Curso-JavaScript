function ejemploCortocircuito(valor) {
    const resultado = valor || "Valor por defecto";
    return resultado;
}

console.log(ejemploCortocircuito(null)); // Output: "Valor por defecto"
console.log(ejemploCortocircuito(undefined)); // Output: "Valor por defecto"
console.log(ejemploCortocircuito("Hola")); // Output: "Hola"
console.log(ejemploCortocircuito(0)); // Output: "Valor por defecto"
console.log(ejemploCortocircuito(false)); // Output: "Valor por defecto"
console.log(ejemploCortocircuito([])); // Output: []
console.log(ejemploCortocircuito({})); // Output: {}
