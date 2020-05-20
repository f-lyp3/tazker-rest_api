function buildFindUserByEmail({
    UserDb, isValidEmail, filterSensitiveProps
}){
    return async function findUserByEmail({ email, ...otherUserInfo }) {
        if(!email || !isValidEmail(email)) throw new Error("Must provide an valid email")

        const foundUser = await UserDb.findByEmail({ email, ...otherUserInfo });

        return filterSensitiveProps([], foundUser);
    }
}

module.exports = buildFindUserByEmail;