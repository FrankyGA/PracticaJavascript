"use strict";

/** Clase zombi */
class Zombi {
  constructor(nombre, puntosVida, potencia) {
    this.nombre = nombre;
    this.puntosVida = puntosVida;
    this.potencia = potencia;
  }

  // Método atacar, pasando por parámetros el objetivo
  atacar(objetivo) {
    console.log(`${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de vida`);
  }
}

/** Clase jugador */
class Jugador {
  constructor(nombre, ocupación, facción) {
    this.nombre = nombre;
    this.ocupación = ocupación;
    this.puntosVida = 100; // Los puntos de vida siempre son 100 para todos los jugadores.
    this.facción = facción; // Se corrige la variable a "facción" en lugar de "faccion"
  }

  // Método toString: muestra la información del jugador
  toString() {
    return `${this.nombre} ---> Ocupación: ${this.ocupación}, Puntos de Vida: ${this.puntosVida}, Facción: ${this.facción}`;
  }
}

// Crear dos jugadores de ejemplo
let jugador1 = new Jugador("Lucius", "Cazador", "Humanos");
let jugador2 = new Jugador("Yayner", "Médico", "Orcos");

/** Solución Ejercicio 2 */

// Clase abominación heredada de la clase zombi
class Abominacion extends Zombi {
  constructor(nombre, puntosVida, potencia) {
    super(nombre, puntosVida, potencia);
  }

  ataqueMultiple(objetivo) {
    for (let i = 0; i < 3; i++) {
      const daño = this.potencia * 3; // Calcula el daño como 3 veces la potencia
      objetivo.puntosVida -= daño; // Reduce los puntos de vida del objetivo
      console.log(`${this.nombre} ataca a ${objetivo.nombre} y le causa ${daño} puntos de daño`);
    }
  }
}

// Crea un objeto Abominación
let abominacion = new Abominacion("Manolo", 150, 20);

// Ejecutar ataqueMultiple sobre un jugador
console.log(`Abominación ataca a ${jugador1.nombre} tres veces:`);
abominacion.ataqueMultiple(jugador1);



/**
* Hemos creado la subclase Abominación de la clase Zombi que hereda sus propiedades y métodos. 
* La nueva clase tiene un método ataqueMultiple(objetivo) que realiza tres ataques consecutivos al objetivo. 
* Luego, creamos un objeto Abominación y ejecutamos el método ataqueMultiple() sobre uno de los jugadores de ejemplo.
*/