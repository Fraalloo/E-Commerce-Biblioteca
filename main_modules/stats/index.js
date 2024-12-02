export const calculateTotalPages = db => db.reduce((c, el) => el.getPages() + c, 0)
export const calculateAveragePrice = db => db.reduce((c, el) => el.getPrice() + c, 0)/db.length
export const extractGenres = db => {
    let unique = []

    db.forEach(el => {if(!unique.includes(el.getGenre())) unique.push(el.getGenre())})

    return unique
}