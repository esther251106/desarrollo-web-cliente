// creamos mapa vacío
let edadesPers = new Map();

edadesPers.set("ana", 22);
edadesPers.set("pepe", 19);
edadesPers.set("maria", 32);
// mostramos mapa
console.log("Mapa inicial");
console.log(edadesPers);

// actualizamos edades
edadesPers.set("pablo", 21);
edadesPers.set("ana", 23);
//mostramos mapa
console.log("mapa actualizado");
console.log(edadesPers);
