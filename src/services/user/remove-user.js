function buildRemoveUser({
    UserDb, isValidID, noSensitive
}){
    
    return async function removeUser({ id, ...otherUserInfo }){
        if(!id || !isValidID(id)) throw new Error("Must provide a valid user id!")

        const removedUser = await UserDb.remove({ _id: id, ...otherUserInfo})

        return noSensitive(removedUser, ["password"]);
    }
}

module.exports = buildRemoveUser;