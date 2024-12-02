"use strict"

export default class Libro{
    #id
    #title
    #author
    #price
    #pages
    #genre
    
    constructor(id, title, author, price, pages, genre){
        this.setId(id);
        this.setTitle(title);
        this.setAuthor(author);
        this.setPrice(price);
        this.setPages(pages);
        this.setGenre(genre);
    }

    getId(){
        return this.#id
    }

    setId(id){
        this.#id = id
    }

    getTitle(){
        return this.#title
    }

    setTitle(title){
        this.#title = title
    }

    getAuthor(){
        return this.#author
    }

    setAuthor(author){
        this.#author = author
    }

    getPrice(){
        return this.#price
    }

    setPrice(price){
        this.#price = price
    }

    getPages(){
        return this.#pages
    }

    setPages(pages){
        this.#pages = pages
    }

    getGenre(){
        return this.#genre
    }

    setGenre(genre){
        this.#genre = genre
    }

    tostr(){
        return `Libro[id = ${this.#id}, title = ${this.#title}, author = ${this.#author}, price = ${this.#price}, pages = ${this.#pages}, genre = ${this.#genre}]\n`
    }
}

export const tostr = db => db.reduce((c,el) => c + el.tostr(), "")