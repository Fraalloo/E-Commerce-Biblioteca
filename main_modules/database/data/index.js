"use strict"

import Libro, {tostr} from "./Libro.js"

let DataBase = [
    new Libro(0,"Dispensa JS","Michele Martella",25,100,"divulgativo"),
    new Libro(1,"Dispensa Reti","Giuseppe Chiumento",30,100,"divulgativo"),
    new Libro(2,"Dispensa Java","Pietro Tamburrano",35,100,"divulgativo"),
    new Libro(3,"Di Tullo, vita e storia","Francesco Di Tullo",35,100,"autobiografia")
]

export {
    default as Libro,
    tostr
} from './Libro.js';
export default DataBase