"use strict"

import readline from "readline"
import chalk from "chalk"
import figlet from 'figlet';

export const prompt = str => {
    const keyb = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    return new Promise((resolve) => {
        keyb.question(str,(answer) => {
            keyb.close();
            resolve(answer);
        })
    })
}

const createFiglet = str => {
    return new Promise((resolve, reject) => {
        figlet(str, (err, data) => {
            if(err){
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

export const intro = async () => {
    const fig = await createFiglet("Benvenuto");
    console.log(chalk.red.bold(fig));
}

export const menu = async () => {
    const fig = await createFiglet("BIBLIOTECA");
    console.log(chalk.red.bold(fig));
    console.log(chalk.hex("#ffa500")("Menù:"));
    console.log(chalk.hex("#808080")(" 0) Esci"));
    console.log(chalk.green(" 1) Aggiungi all'inizio"));
    console.log(chalk.green(" 2) Aggiungi alla fine"));
    console.log(chalk.red(" 3) Rimuovi all'inizio"));
    console.log(chalk.red(" 4) Rimuovi alla fine"));
    console.log(chalk.blue(" 5) Totale pagine"));
    console.log(chalk.blue(" 6) Prezzo medio"));
    console.log(chalk.blue(" 7) Elenco generi"));
    console.log(chalk.yellow(" 8) Cerca autore"));
    console.log(chalk.yellow(" 9) Cerca libro"));
    console.log(chalk.yellow("10) Ordina in base al genere"));
    console.log(chalk.hex("#a020f0")("11) Validità prezzi"));
    console.log(chalk.hex("#a020f0")("12) Presenza genere"));
    console.log(chalk.hex("#a020f0")("13) Validità pagine"));
}

export const req = async () => {
    let scelta;

    while(true){
        scelta = parseInt(await prompt("Scegli: "));
        if(scelta >= 0 && scelta <= 13) break;
    }

    return scelta;
}

export const alt = async () => {
    await prompt("\n\nPREMERE INVIO PER CONTINUARE");
    console.clear();
}

// database
import db, {
    Libro,
    addBookAtStart, 
    addBookAtEnd,
    removeBookAtStart,
    removeBookAtEnd
} from "./database/index.js"

export {
    default as db,
    Libro,
    addBookAtStart, 
    addBookAtEnd,
    removeBookAtStart,
    removeBookAtEnd
} from "./database/index.js"

// stats
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

// filter
import {
    filterByAuthor,
    findBookByTitle,
    sortBooksByGenre
} from "./filter/index.js"

export {
    filterByAuthor,
    findBookByTitle,
    sortBooksByGenre
} from "./filter/index.js"

// validate
import {
    validatePositivePrice,
    checkGenrePresence,
    validateMinimumPages
} from "./valid/index.js"

export {
    validatePositivePrice,
    checkGenrePresence,
    validateMinimumPages
} from "./valid/index.js"

const askLibro = async () => {
    let id
    let title
    let author
    let price
    let pages
    let genre

    console.log("Inserimento Libro")
    id = parseInt(await prompt("Inserisci id: "));
    title = await prompt("Inserisci titolo: ");
    author = await prompt("Inserisci autore: ");
    price = parseFloat(await prompt("Inserisci prezzo: "));
    pages = parseInt(await prompt("Inserisci pagine: "));
    genre = await prompt("Inserisci genere: ");

    return new Libro(id,title,author,price,pages,genre)
}

const addstart = async () => {addBookAtStart(db,await askLibro())}
const addend = async () => {addBookAtEnd(db,await askLibro())}
const remstart = async () => {removeBookAtStart(db)}
const remend = async () => {removeBookAtEnd(db)}
const totpag = async () => {console.log(`Totale pagine: ${calculateTotalPages(db)}`)}
const avrg = async () => {console.log(`Prezzo medio: ${calculateAveragePrice(db)}`)}
const elgenre = async () => {console.log(`Elenco:\n${extractGenres(db)}`)}
const searchauth = async () => {
    let author = await prompt("Inserisci autore: ")
    let libs = filterByAuthor(db,author)
    console.log(Libro.tostr(libs))
}
const findtitle = async () => {
    let title = await prompt("Inserisci titolo: ")
    let lib = findBookByTitle(db,title)
    console.log( lib == null ? "Non c'è" : lib.tostr())
}
const sortgen = async () => {console.log(Libro.tostr(sortBooksByGenre(db)))}
const validprez = async () => {console.log(validatePositivePrice(db)
    ? "Prezzi validi"
    : "Prezzi invalidi"
)}
const validgen = async () => {
    let genre = await prompt("Inserisci genere: ")
    console.log(checkGenrePresence(db,genre)
        ? "Genere presente"
        : "Genere non presente"
    )
}
const validpag = async () => {console.log(validateMinimumPages(db)
    ? "Pagine valide"
    : "Pagine invalide"
)}
const exit = async () => {
    console.log(chalk.red.bold.underline.italic("Grazie per aver usato il programma!"))
    process.exit(0)
}

let func = [
    exit,
    addstart,
    addend,
    remstart,
    remend,
    totpag,
    avrg,
    elgenre,
    searchauth,
    findtitle,
    sortgen,
    validprez,
    validgen,
    validpag
]

export default func