let mochila = [
    {
        color: "rojo",
        marca: "totto",
        material: "poliester",
        tamaño: "grande",
    },
];
for (let objeto of mochila) {
    for (let [clave, valor] of Object.entries(objeto)) {
        console.log(clave + ": " + valor);
    }
}
