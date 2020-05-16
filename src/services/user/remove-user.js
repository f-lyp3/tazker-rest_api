function buildRemoveUser({ UserDb, isValidID }){
    
    return async function removeUser({ id, ...otherUserInfo }){
        if(!id || !isValidID(id)) throw new Error("Must provide a valid user id!")

        const removed = await UserDb.remove({ _id: id, ...otherUserInfo})

        return removed;
    }
}

module.exports = buildRemoveUser;