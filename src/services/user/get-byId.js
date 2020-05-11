function buildGetUserById({ UserDb, isValidID }){
    return async function getUserById({ id }) {
        if(!id || !isValidID(id)) throw new Error("Must provide a valid user id!")

        const found = await UserDb.findById(id);

        return found;
    }
}

module.exports = buildGetUserById;