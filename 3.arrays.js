const frutas = ["banana", "maçã", "laranja", "uva"];

//push → agrega un elemento al final del array
frutas.push("pera");
console.log(frutas); // ["banana", "maçã", "laranja", "uva", "pera"]

//pop → elimina el último elemento del array
frutas.pop();
console.log(frutas); // ["banana", "maçã", "laranja", "uva"]

//shift → elimina el primer elemento del array
frutas.shift();
console.log(frutas); // ["maçã", "laranja", "uva"]

//unshift → agrega un elemento al inicio del array
frutas.unshift("banana");
console.log(frutas); // ["banana", "maçã", "laranja", "uva"]

//map → crea un nuevo array con los resultados de la función aplicada a cada elemento
const frutasEnMayusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasEnMayusculas); // ["BANANA", "MAÇÃ", "LARANJA", "UVA"]

//filter → crea un nuevo array con los elementos que cumplen una condición
const frutasConA = frutas.filter(fruta => fruta.includes("a"));
console.log(frutasConA); // ["banana", "maçã", "laranja"]

//find → devuelve el primer elemento que cumple una condición
const frutaConA = frutas.find(fruta => fruta.includes("a"));
console.log(frutaConA); // "banana"

//indexOf → devuelve la posición del primer elemento que coincide
const indexDeLaranja = frutas.indexOf("laranja");
console.log(indexDeLaranja); // 2

//length → longitud del array
console.log(frutas.length); // 4

//reduce → reduce el array a un solo valor
const concatenarFrutas = frutas.reduce((acumulador, fruta) => acumulador + " " + fruta);
console.log(concatenarFrutas); // "banana maçã laranja uva"

//forEach → ejecuta una función para cada elemento del array
frutas.forEach(fruta => console.log(fruta)); 