"use strict"

import db, {
    Libro,
    tostr,
    addBookAtStart,
    addBookAtEnd,
    removeBookAtStart,
    removeBookAtEnd,
    calculateTotalPages,
    calculateAveragePrice,
    extractGenres
} from "./main_modules/index.js"

const main = () => {
    console.log(tostr(db))
    addBookAtStart(db,new Libro(10,"Ae","Ae",30,100,"aeee"))
    addBookAtEnd(db,new Libro(10,"Ae1","Ae1",30,100,"aeee"))
    console.log(tostr(db))
    removeBookAtStart(db)
    removeBookAtEnd(db)
    console.log(tostr(db))
    console.log(calculateTotalPages(db))
    console.log(calculateAveragePrice(db))
    console.log(extractGenres(db))
    console.log(tostr(db))
}

main()