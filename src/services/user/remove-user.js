function buildRemoveUser({
    UserDb, isValidID, filterSensitiveProps
}){
    
    return async function removeUser({ id, ...otherUserInfo }){
        if(!id || !isValidID(id)) throw new Error("Must provide a valid user id!")

        const removedUser = await UserDb.remove({ _id: id, ...otherUserInfo})

        return filterSensitiveProps(["password"], removedUser);
    }
}

module.exports = buildRemoveUser;