// a. Lista de colores favoritos
// Tipo: Arreglo
// Justificación: Porque es una lista de varios elementos del mismo tipo.
let colores = ["rojo", "azul", "verde", "negro"];

// b. Información completa de un estudiante
// Tipo: Objeto
// Justificación: Porque tiene varias características diferentes de una sola persona.
let estudiante = {
    nombre: "Carlos",
    edad: 20,
    carrera: "Ingeniería",
    semestre: 3,
};

// c. Precios de diferentes camisetas
// Tipo: Arreglo de objetos
// Justificación: Porque hay varios productos y cada uno tiene varias propiedades.
let camisetas = [
    { nombre: "Camiseta blanca", precio: 30000 },
    { nombre: "Camiseta negra", precio: 35000 },
    { nombre: "Camiseta roja", precio: 32000 },
];

// d. Descripción de un computador portátil
// Tipo: Objeto
// Justificación: Porque describe un solo elemento con varias características.
let computador = {
    marca: "HP",
    procesador: "Intel i5",
    ram: "8GB",
    almacenamiento: "512GB SSD",
};
console.log(colores);
console.log(estudiante.nombre);
console.log(camisetas[0].nombre);
console.log(computador.marca);
