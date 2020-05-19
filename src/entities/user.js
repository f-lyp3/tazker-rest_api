function builMakeUser({
    mustHaveError,
    isValidEmail,
    isFinePassword,
    isValidName,
    capitalize
}){
    // makeUser Verifies given information
    // If it makes a valid user prior user creation.
    return function makeUser({
        firstName,
        lastName,
        email,
        password
    } = {}){

        // All params are required!
        if(!firstName) throw mustHaveError('User', 'firstName');
        if(!isValidName(firstName)) throw new Error("Invalid user's firstName!")

        if(!lastName) throw mustHaveError('User', 'lastName');
        if(!isValidName(lastName)) throw new Error("Invalid user's lastName!")

        if(!email) throw mustHaveError('User', 'email');
        if(!isValidEmail(email)) throw new Error("Invalid user's email!");

        if(!password) throw mustHaveError('User', 'password');
        if(!isFinePassword(password)) {
            throw new Error(
                "Password must be at least 6 chars long\
                including letters, numbers, and or symbols (!-_#$%&/()=?)"
            )
        }

        // Returns a read-only object
        return Object.freeze({
            getFirstName: () => capitalize(firstName),
            getLastName: () => capitalize(lastName),
            getEmail: () => email,
            getPasswordToHash: () => password
        });
    }
}

module.exports = builMakeUser;