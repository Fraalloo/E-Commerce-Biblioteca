"use strict"

export const validatePositivePrice = db => db.every(libro => libro.getPrice() > 0)
export const checkGenrePresence = (db, genre) => db.some(libro => libro.getGenre() == genre)
export const validateMinimumPages = db => db.every(libro => libro.getPages() > 20)