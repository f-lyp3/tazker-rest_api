function buildFindUserByEmail({
    UserDb, isValidEmail, noSensitive
}){
    return async function findUserByEmail({ email, ...otherUserInfo }) {
        if(!email || !isValidEmail(email)) throw new Error("Must provide an valid email")

        const foundUser = await UserDb.findByEmail({ email, ...otherUserInfo });

        return noSensitive(foundUser, [""]);
    }
}

module.exports = buildFindUserByEmail;