const humano = {
    nombre: "",
    apellido: "",
    edad: 0 // Inicializamos la edad como 0
};

const manejador = {
    set(obj, prop, valor) {
        if (prop === "nombre" || prop === "apellido") {
            // Validación para nombre y apellido: solo letras y espacios
            if (typeof valor === "string" && /^[a-zA-Z\s]+$/.test(valor)) {
                obj[prop] = valor;
            } else {
                throw new TypeError(`El valor para ${prop} debe contener solo letras y espacios.`);
            }
        } else if (prop === "edad") {
            // Validación para edad: solo números
            if (typeof valor === "number" && !isNaN(valor)) {
                obj[prop] = valor;
            } else {
                throw new TypeError(`La edad debe ser un número.`);
            }
        } else {
            // Si se intenta establecer una propiedad no válida, lanzamos un error
            throw new Error(`Propiedad no válida: ${prop}`);
        }
    }
};

const job = new Proxy(humano, manejador);

// Ejemplos de uso
try {
    job.nombre = "John";
    job.apellido = "Doe";
    job.edad = 30;
    console.log(job);
} catch (error) {
    console.error(error.message);
}

// Intento de asignación inválida (debería lanzar un error)
try {
    job.edad = "treinta";
} catch (error) {
    console.error(error.message);
}
