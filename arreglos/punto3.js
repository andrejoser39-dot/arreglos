//3. Notas de actividades: Cree un arreglo con seis notas numéricas. Recorra el arreglo  usando for y calcule el promedio (no use funciones externas). 
// 1. Crear el arreglo con seis notas numéricas
let notas = [4.5, 3.8, 5.0, 2.5, 4.2, 3.0];

// 2. Variable para acumular la suma de las notas
let sumaTotal = 0;

// 3. Recorrer el arreglo usando un bucle for clásico
for (let i = 0; i < notas.length; i++) {
    sumaTotal += notas[i]; // Sumamos cada nota a la variable acumuladora
}

// 4. Calcular el promedio (suma total dividida por la cantidad de elementos)
let promedio = sumaTotal / notas.length;

