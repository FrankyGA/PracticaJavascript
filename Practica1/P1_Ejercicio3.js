"use strict";

// Definición de la clase Consumible
class Consumible {
    // Constructor de la clase Consumible
    constructor(nombre) {
        this.nombre = nombre; // Inicializa la propiedad nombre con el valor proporcionado
    }

    // Método consumir que muestra un mensaje
    consumir(jugador) {
        console.log(jugador.nombre + " consume " + this.nombre + " y no tiene ningún efecto");
    }
}

// Creación de un objeto Consumible
let manzana = new Consumible('Manzana');

// Definición de un objeto jugador llamado "ricardo" con sus propiedades y un método consumir
let ricardo = {
    nombre: 'Ricardo',
    potencia: 1,
    puntosVida: 8,
    maxPuntosVida: 10,

    consumir: function (consumible) {
        consumible.consumir(this); // Llama al método consumir del objeto Consumible
    }
}

// Jugador "ricardo" consume la "manzana"
ricardo.consumir(manzana);

/**Solución Ejercicio 3 */

// Definición de la clase PlantaCurativa que hereda de Consumible
class PlantaCurativa extends Consumible {
    // Constructor de la clase PlantaCurativa con nombre y poder
    constructor(nombre, poder) {
        super(nombre); // Llama al constructor de la clase base (Consumible) con el nombre
        this.poder = poder; // Inicializa la propiedad poder de la planta curativa
    }

    // Método consumir específico para PlantaCurativa
    consumir(jugador) {
        if ((this.poder + jugador.puntosVida) > jugador.maxPuntosVida) {
            // Si la suma supera el máximo de puntos de vida, establece los puntos de vida al máximo
            jugador.puntosVida = jugador.maxPuntosVida;
        } else {
            // Incrementa los puntos de vida del jugador con el poder de la planta.
            jugador.puntosVida += this.poder;
        }

        //Muestra por consola efecto del consumible
        console.log(
            `${jugador.nombre} consume ${this.nombre} y ahora tiene ${jugador.puntosVida} puntos de vida.`
        );
    }
}

// Crear un objeto de tipo PlantaCurativa llamado "plantaCurativa" con nombre "Planta Curativa" y poder 4
let plantaCurativa = new PlantaCurativa('Planta Curativa', 4);

// Jugador "ricardo" consume la planta curativa
ricardo.consumir(plantaCurativa);




