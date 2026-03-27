// 1. Crear un arreglo vacío
let tareas = [];

// 2. Agregar tres actividades utilizando push()
tareas.push("Estudiar JavaScript");
tareas.push("Hacer ejercicio");
tareas.push("Lavar la ropa");

// 3. Eliminar la última actividad utilizando pop()
// (En este caso, se eliminará "Lavar la ropa")
tareas.pop();
// 4. Mostrar el resultado final
console.log("Mi lista de tareas pendientes:");
console.log(tareas);

// Opcional: Mostrar cuántas tareas quedaron
console.log("Total de tareas actuales:", tareas.length);