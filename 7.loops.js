// FOR clásico
// Se usa cuando sabemos cuántas veces queremos iterar

for (let i = 0; i < 5; i++) {
  console.log("For:", i);
}

// WHILE
// Se ejecuta mientras la condición sea verdadera

let contador = 0;

while (contador < 5) {
  console.log("While:", contador);
  contador++;
}

// DO WHILE
// Se ejecuta al menos una vez

let numero = 0;

do {
  console.log("Do While:", numero);
  numero++;
} while (numero < 3);

// FOR...OF
// Recorre valores de un array

const frutas = ["Manzana", "Banana", "Pera"];

for (const fruta of frutas) {
  console.log("For of:", fruta);
}

// FOR...IN
// Recorre propiedades de un objeto

const persona = {
  nombre: "Juan",
  edad: 30
};

for (const key in persona) {
  console.log("For in:", key, persona[key]);
}

// BONUS: some()
// Devuelve true si al menos un elemento cumple la condición

const numeros = [1, 2, 3, 4];

const hayMayor = numeros.some(n => n > 3);
console.log("Some:", hayMayor);

// BONUS: every()
// Devuelve true si TODOS cumplen la condición

const todosPositivos = numeros.every(n => n > 0);
console.log("Every:", todosPositivos);