require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

module.exports = Object.freeze({
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    APP_SECRET: process.env.APP_SECRET
});