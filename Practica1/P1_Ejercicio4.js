"use strict";

let puntuaciones = [
  { nombre: "Pablo", puntuacion: 180 },
  { nombre: "Javier", puntuacion: 270 },
  { nombre: "Raquel", puntuacion: 70 },
  { nombre: "Mario", puntuacion: 310 },
  { nombre: "Miriam", puntuacion: 90 },
  { nombre: "Fernando", puntuacion: 105 },
  { nombre: "Laura", puntuacion: 210 },
  { nombre: "Julian", puntuacion: 520 },
];

/** Solución Ejercicio 4 */

// Muestra por consola todos los jugadores
console.log("Todos los jugadores:");
puntuaciones.forEach((jugador, index) => {
  console.log(`${index + 1}. ${jugador.nombre} - Puntuación: ${jugador.puntuacion}`);
});

// Ordena el array de puntuaciones por puntuación de mayor a menor.
puntuaciones.sort((a, b) => b.puntuacion - a.puntuacion);

// Muestra por consola la clasificación de jugadores ordenada por puntos.
console.log("\nClasificación de jugadores ordenada por puntos:");
puntuaciones.forEach((jugador, index) => {
  console.log(`${index + 1}. ${jugador.nombre} - Puntuación: ${jugador.puntuacion}`);
});

function jugadoresTop(array) {
  // Utiliza el método filter para crear un nuevo array con los jugadores que tienen más de 100 puntos.
  let jugadoresTopArray = array.filter((jugador) => jugador.puntuacion > 100);

  return jugadoresTopArray;
}

// Llama a la función y almacena el resultado en una variable.
let jugadoresTopArray = jugadoresTop(puntuaciones);

// Muestra por consola los nombres y puntuaciones de los jugadores con más de 100 puntos.
console.log("\nJugadores con más de 100 puntos:");
jugadoresTopArray.forEach((jugador) => {
  console.log(`${jugador.nombre} - Puntuación: ${jugador.puntuacion}`);
});











