// array con nº duplicados
let numeros = [10, 20, 10, 32, 10, 11];
console.log("Array con valores duplicados: ", JSON.stringify(numeros));
// set para crear nuevo array que contenga nº únicos
let setNum = new Set(numeros);
//lo pasamos a array para mostrarlo
let setArray = Array.from(setNum);
console.log("Array sin valores duplicados: ", JSON.stringify(setArray));