export const addBookAtStart = (db, lib) => {
    db.unshift(lib)
}

export const addBookAtEnd = (db, lib) => {
    db.push(lib)
}

export const removeBookAtStart = db => {
    db.shift()
}

export const removeBookAtEnd= db => {
    db.pop()
}