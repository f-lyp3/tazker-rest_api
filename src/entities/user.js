function builMakeUser({ mustHaveError }){
    // makeUser Verifies given information if makes a valid user prior user creation.
    return function makeUser({
        firstname,
        lastname,
        email,
        password,
        createdAt = Date.now() // User' signed up date, defaults from current date on runtime.
    } = {}){

        // All params are required!
        if(!firstname) throw mustHaveError('User', 'firstname');
        if(!isValidname(firstname)) throw new Error("Invalid user's firstname!")

        if(!lastname) throw mustHaveError('User', 'lastname');
        if(!isValidname(lastname)) throw new Error("Invalid user's lastname!")

        if(!email) throw mustHaveError('User', 'email');
        if(!isValidEmail) throw new Error("Invalid user's email!");

        if(!password) throw mustHaveError('User', 'password');
        if(!isFinePassoword(password)) {
            throw new Error(
                "Password must be at least 6 chars long including letters, numbers, and or symbols (!-_#$%&/()=?)"
                )
        }


        // Returns a read-only object
        return Object.freeze({
            getFirstname: () => firstname,
            getLastname: () => lastname,
            getEmail: () => email,
            getPasswordToHash: () => password,
            getCreationDate: () => createdAt
        });
    }

    function isValidname(name){
        // Validate user's name
        const nameRegex = new RegExp(/^[a-zA-Z]+$/);
        return nameRegex.test(name);
    }

    function isValidEmail(email){
        // Validate the email
        const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

        return emailRegex.test(email)
    }

    function isFinePassoword(password){
        // Verifies user password strenght
        let passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})")

        return passwordRegex.test(password)
    }

}

module.exports = builMakeUser;