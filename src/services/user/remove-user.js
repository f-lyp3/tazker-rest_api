function buildRemoveUser({ UserDb, isValidID }){
    
    return async function removeUser(id){
        if(!id) throw new Error("Must provide an user id!")
        if(!isValidID(id)) throw new Error("Invalid user id!")

        const removed = await UserDb.removeById(id)

        return removed;
    }
}

module.exports = buildRemoveUser;