"use strict";

/**Clase zombi */

class Zombi {

  contructor(nombre, puntosVida, potencia) {
    this.nombre = nombre;
    this.puntosVida = puntosVida;
    this.potencia = potencia;
  }

  //Método atacar, pasando por parámetros el objetivo
  atacar(objetivo) {
    console.log(`${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de vida`);
  }
}

/**Solución Ejercicio 1*/

/**Clase jugador */
class Jugador {
  constructor(nombre, ocupacion, faccion) {
    this.nombre = nombre;
    this.ocupacion = ocupacion;
    this.puntosVida = 100; // Los puntos de vida siempre son 100 para todos los jugadores.
    this.faccion = faccion;
  }

  //Método toString: muestra la información del jugador
  toString() {
    return `${this.nombre} ---> Ocupación: ${this.ocupacion}, Puntos de Vida: ${this.puntosVida}, Facción: ${this.faccion}`;
  }
}

// Crear dos jugadores de ejemplo
let jugador1 = new Jugador("Lucius", "Cazador", "Humanos");
let jugador2 = new Jugador("Yayner", "Médico", "Orcos");

//Muestra por consola los datos de los jugadores
console.log(jugador1.toString());
console.log(jugador2.toString());

/**
 * Hemos creado la clase Jugador, que tiene un constructor para inicializar los datos del jugador 
 * y un método toString() para mostrar la información del jugador de manera legible. Luego, hemos creado dos jugadores de ejemplo.
 */