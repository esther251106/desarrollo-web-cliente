let data = [
{name: "Nacho", telephone: "966112233", age: 40},
{name: "Ana", telephone: "911223344", age: 35},
{name: "Mario", phone: "611998877", age: 15},
{name: "Laura", telephone: "633663366", age: 17}
];

// e) añade dos elementos al final
data.push(
    {name: "Pedro", telephone: "611944444", age: 25},
    {name: "Julia", phone: "633232323", age: 37}
);

// comprueba con console.log(data) que se han añadidogit 
console.log("Array completo", JSON.stringify(data)); // JSOn.stringify => obliga a la consola una foto fija en lugar de un obj interactivo

// ordenar vector por edad, comprobar resultado
data.sort(function(a,b) {
    return a.age - b.age;
}); 
console.log("Array ordenado por edad: ", JSON.stringify(data));

// Ordena vector por nombre, comprueba resultado
data.sort(function(a, b) {
  return a.name.localeCompare(b.name);
});
console.log("Array ordenado por nombre: ", JSON.stringify(data));

// Crea y muestra un nuevo vector que contenga solo los mayores de 30 años.
let mayores30 = [];
for (let i = 0; i < data.length; i++) {
    const m30 = data[i].age;
    if(m30 > 30){
        mayores30.push(data[i]);
    }
}
console.log("Vector con la gente mayor de 30: ", JSON.stringify(mayores30));
