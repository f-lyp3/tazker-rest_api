function buildGetUserById({ UserDb, isValidID }){
    return async function getUserById({ id }) {
        if(!id || !isValidID(id)) throw new Error("Must provide an valid Id")

        const found = await UserDb.findById(id);
        if(!found) throw new Error("User doesn't exists!");

        return found;
    }
}

module.exports = buildGetUserById;