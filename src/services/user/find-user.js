function buildFindUser({
    UserDb, isValidID, filterSensitiveProps
}){
    return async function findUser({ id, ...otherUserInfo }) {
        if(id && !isValidID(id)) throw new Error("Must provide a valid user id!")

        const foundUser = await UserDb.find({ _id: id, ...otherUserInfo });

        return filterSensitiveProps(["password"], foundUser);
    }
}

module.exports = buildFindUser;