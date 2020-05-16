function buildFindUserByEmail({ UserDb, isValidEmail }){
    return async function findUserByEmail({ email, ...otherUserInfo }) {
        if(!email || !isValidEmail(email)) throw new Error("Must provide an valid email")

        const found = await UserDb.findByEmail({ email });

        return found;
    }
}

module.exports = buildFindUserByEmail;