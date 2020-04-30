const db = require("../database");

// Exports a function to remove all data from all collection in db throught its models.
module.exports = async () => {
    // Return a promised Array of called functions.
    return Promise.all(Object.keys(db.models).map( key => {
        return db.models[key].deleteMany();
    }));
}