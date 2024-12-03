"use strict"

// TERMINAL LINK

import func, {
    intro,
    menu,
    req,
    alt,
    printImg,
    printLink
} from "./main_modules/index.js"

import {
    libImg
} from "./assets/index.js"

const main = async () => {
    let scelta;

    await intro();
    
    while(true){
        await menu()
        console.log()
        await printImg(libImg)
        printLink("https://github.com/Fraalloo/E-Commerce-Biblioteca")
        
        scelta = await req()
        console.log("\n")

        await func[scelta]()

        await alt()
    }
}

main()