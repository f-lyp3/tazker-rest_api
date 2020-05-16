function buildFindUser({ UserDb, isValidID }){
    return async function findUser({ id, ...otherUserInfo }) {
        if(id && !isValidID(id)) throw new Error("Must provide a valid user id!")

        const found = await UserDb.find({ _id: id, ...otherUserInfo });

        return found;
    }
}

module.exports = buildFindUser;