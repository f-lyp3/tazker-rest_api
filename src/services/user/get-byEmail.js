function buildGetUserByEmail({ UserDb, isValidEmail }){
    return async function getUserByEmail({ email }) {
        if(!email || !isValidEmail(email)) throw new Error("Must provide an valid email")

        const found = await UserDb.findByEmail(email);

        return found;
    }
}

module.exports = buildGetUserByEmail;