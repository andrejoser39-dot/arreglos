//2. Inventario de frutas: Dado el arreglo ["Manzana", "Pera", "Uva"], agregue “Banano”  al inicio, retire el último elemento y muestre el arreglo final. Luego recórralo  utilizando for...of
// 1. Arreglo inicial
let inventarioFrutas = ["Manzana", "Pera", "Uva"];

// 2. Agregar "Banano" al inicio (.unshift)
inventarioFrutas.unshift("Banano");

// 3. Retirar el último elemento (.pop)
inventarioFrutas.pop();

// 4. Mostrar el arreglo final en la consola
console.log("Arreglo final:", inventarioFrutas);

// 5. Recorrer el arreglo utilizando for...of
console.log("Recorriendo el inventario:");
for (let fruta of inventarioFrutas) {
    console.log("- " + fruta);
}