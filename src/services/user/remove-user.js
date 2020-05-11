function buildRemoveUser({ UserDb, isValidID }){
    
    return async function removeUser({ id }){
        if(!id || !isValidID(id)) throw new Error("Must provide a valid user id!")

        const removed = await UserDb.removeById(id)

        return removed;
    }
}

module.exports = buildRemoveUser;