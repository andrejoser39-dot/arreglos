// 1. Crear el arreglo inicial con cinco aprendices
let listaAsistencia = ["Ana García", "Luis Pérez", "María López", "Carlos Ruiz", "Elena Sanz"];

// 2. Agregar un nuevo nombre al final (.push)
listaAsistencia.push("Pedro Torres");

// 3. Eliminar el primero de la lista (.shift)
listaAsistencia.shift();

// 4. Mostrar la cantidad total de nombres registrados (.length)
console.log("Cantidad total de aprendices:", listaAsistencia.length);

// Opcional: Ver cómo quedó la lista final
console.log("Lista actualizada:", listaAsistencia);