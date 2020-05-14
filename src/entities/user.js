function builMakeUser({ mustHaveError, isValidEmail, isFinePassword, isValidName }){
    // makeUser Verifies given information if makes a valid user prior user creation.
    return function makeUser({
        firstname,
        lastname,
        email,
        password
    } = {}){

        // All params are required!
        if(!firstname) throw mustHaveError('User', 'firstname');
        if(!isValidName(firstname)) throw new Error("Invalid user's firstname!")

        if(!lastname) throw mustHaveError('User', 'lastname');
        if(!isValidName(lastname)) throw new Error("Invalid user's lastname!")

        if(!email) throw mustHaveError('User', 'email');
        if(!isValidEmail(email)) throw new Error("Invalid user's email!");

        if(!password) throw mustHaveError('User', 'password');
        if(!isFinePassword(password)) {
            throw new Error(
                "Password must be at least 6 chars long including letters, numbers, and or symbols (!-_#$%&/()=?)"
                )
        }

        // Returns a read-only object
        return Object.freeze({
            getFirstname: () => firstname,
            getLastname: () => lastname,
            getEmail: () => email,
            getPasswordToHash: () => password
        });
    }
}

module.exports = builMakeUser;