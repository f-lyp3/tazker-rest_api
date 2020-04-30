function buildGetUserByEmail({ UserDb, isValidEmail }){
    return async function getUserByEmail({ email }) {
        if(!email || !isValidEmail(email)) throw new Error("Must provide an valid email")

        const found = await UserDb.findByEmail(email);
        if(!found) throw new Error("User doesn't exists!");

        return found;
    }
}

module.exports = buildGetUserByEmail;