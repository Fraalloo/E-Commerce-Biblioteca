export const calculateTotalPages = db => db.reduce((c, el) => el.getPages() + c, 0)
export const calculateAveragePrice = db => db.reduce((c, el) => el.getPrice() + c, 0)/db.length
export const extractGenres = db => db.map((el, i, a) => el.getGenre()) // SNJFN