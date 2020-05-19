const { makeUser } = require("../../entities");

function buildUpdateUser({
    UserDb, isValidID, hashPassword, noSensitive
}){
    return async function updateUser({ id, ...otherUserInfo }, updates){
        
        if(!id || !isValidID(id)) throw new Error("Must provide a valid user id!")

        // If user doesn't exists return null.
        let existing = await UserDb.find({ _id: id, ...otherUserInfo });
        if(!existing) return null;

        let notAlloweds = checkForNonAllowed(updates, [
            "firstName", "email", "lastName", "password"
        ])
        if(notAlloweds.length) throw new Error(
                `Invalid update's fields! [${notAlloweds.join(", ")}]`
            )

        // Merge old user info with updates, and validate.
        const user = makeUser({
            ...existing,
            ...updates
        });

        const hashedpwd = updates.password ?
            await hashPassword(user.getPasswordToHash()) : user.getPasswordToHash();

        const updatedUser = await UserDb.update({ _id: id, ...otherUserInfo }, {
            ...updates,
            password: hashedpwd
        });

        return noSensitive(updatedUser, ["password"]);
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