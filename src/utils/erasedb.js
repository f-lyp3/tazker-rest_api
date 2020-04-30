// IIEF to erase the entire database.
(async () => {
    await require("./truncate-db")()
    process.exit(0)
})()