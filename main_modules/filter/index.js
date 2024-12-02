"use strict";

export const filterByAuthor = (db, author) => db.filter(book => book.getAuthor() === author)
export const findBookByTitle = (db, title) => db.find(book => title === book.getTitle())
export const sortBooksByGenre = db => {
    let copy = Array.from(db)
    copy.sort((a,b) => a.getGenre().localeCompare(b.getGenre()))
    return copy
}