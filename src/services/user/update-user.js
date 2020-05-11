const { makeUser } = require("../../entities");

function buildUpdateUser({ UserDb, isValidID }){
    return async function updateUser(id, updates){
        if(!id) throw new Error("Must provide an user id!");
        if(!isValidID(id)) throw new Error("Invalid user id!");

        // If user doesn't exists throw at the caller.
        let existing = await UserDb.findById(id);
        if(!existing) return null;

        // TODO: in the future allow to update the current email or to add a new one more.
        let notAlloweds = checkForNonAllowed(updates, ["firstname", "lastname", "password"])
        if(notAlloweds.length) throw new Error(`Invalid update's fields! [${notAlloweds.join(", ")}]`)

        // Merge old user info with updates, and validate.
        makeUser({
            ...existing,
            ...updates
        });

        return await UserDb.updateById(id, {
            ...updates
        });
    }

    function checkForNonAllowed(updates, allowed){
        // check for every non updates fields
        const notAllowed = []
        Object.keys(updates).map(update => {
            if(allowed.includes(update) === false) {
                notAllowed.push(update)
            }
        });
        // return an array of non updates fields
        return notAllowed;
    }
}

module.exports = buildUpdateUser;