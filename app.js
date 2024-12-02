"use strict"

import func, {
    intro,
    menu,
    req,
    alt,
} from "./main_modules/index.js"

const main = async () => {
    let scelta;

    await intro();

    while(true){
        await menu();
        
        scelta = await req();
        console.log("\n");

        await func[scelta]();

        await alt();
    }
}

main()