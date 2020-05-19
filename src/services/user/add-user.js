const { makeUser } = require("../../entities");

function buildCreateUser({
    UserDb, hashPassword, noSensitive
}){
    return async function create(userInfo){

        // Validate provided user information.
        const user = makeUser(userInfo);

        const exists = await UserDb.findByEmail({ email: user.getEmail()});
        if(exists) throw new Error("Email already taken!");

        const hashedpwd = await hashPassword(user.getPasswordToHash());
        // User information it's ok, insert it into the db.
        const createdUser = await UserDb.insert({
            firstName: user.getFirstName(),
            lastName: user.getLastName(),
            email: user.getEmail(),
            password: hashedpwd
        });

        return noSensitive(createdUser, ["password"]);
    }
}

module.exports = buildCreateUser;