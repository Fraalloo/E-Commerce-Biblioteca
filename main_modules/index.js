import db, {
    Libro,
    tostr,
    addBookAtStart, 
    addBookAtEnd,
    removeBookAtStart,
    removeBookAtEnd
} from "./database/index.js"

export {
    default,
    Libro,
    tostr,
    addBookAtStart, 
    addBookAtEnd,
    removeBookAtStart,
    removeBookAtEnd
} from "./database/index.js"


import {
    calculateTotalPages,
    calculateAveragePrice,
    extractGenres
} from "./stats/index.js"

export {
    calculateTotalPages,
    calculateAveragePrice,
    extractGenres
} from "./stats/index.js"