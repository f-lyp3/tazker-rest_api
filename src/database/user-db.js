function makeUserDb({ UserModel }){
    return Object.freeze({
        find,
        findById,
        findByEmail,
        insert,
        updateById,
        removeById
    });

    async function find(){}

    async function findById(userId){
        // Finds an user by it's id and return it
        try {
            const foundUser = await UserModel.findById(userId);
            return foundUser._doc; // Return the document info only, without mongoose methods
        } catch (err) {
            // TODO: Add loggin
            console.log(err)
        }
    }

    async function findByEmail(userEmail){
        // Finds an user by email and return it
        try {
            const foundUser = await UserModel.findOne({ email: userEmail});
            return foundUser._doc; // Return the document info only, without mongoose methods
        } catch (err) {
            // TODO: Add loggin
            console.log(err)
        }
    }

    async function insert(userInfo){
        // Creates an user and return it
        try {
            const created = await UserModel.create(userInfo);
            return created._doc; // Return the document info only, without mongoose methods
        } catch (err) {
            // TODO: Add loggin
            console.log(err)
        }
    }

    async function updateById(userId, updates){
        // Updates an user by id and return it
        try {
            const updatedUser = await UserModel.findByIdAndUpdate(userId, updates, { new: true });
            return updatedUser._doc; // Return the document info only, without mongoose methods
        } catch (err) {
            // TODO: Add loggin
            console.log(err)
        }
    }

    async function removeById(userId){
        // Remove an user by id and return it
        try {
            const removedUser = await UserModel.findByIdAndRemove(userId);
            return removedUser._doc; // Return the document info only, without mongoose methods
        } catch (err) {
            // TODO: Add loggin
            console.log(err)
        }
    }

}

module.exports = makeUserDb;