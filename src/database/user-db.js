function makeUserDb({ UserModel }){
    return Object.freeze({
        find,
        findByEmail,
        insert,
        update,
        remove
    });

    async function find(query){
        if(!query) return null;
        // Finds an user by it's id and return it
        try {
            const foundUser = await UserModel.findOne(query);
            // Return the document info only, without mongoose methods
            return foundUser ? foundUser._doc : null 
        } catch (err) {
            // TODO: Add loggin
            console.log(err)
        }
    }

    async function findByEmail({ email }){
        // Finds an user by email and return it
        if(!email) return null;
        try {
            const foundUser = await UserModel.findOne({ email });
            return foundUser ? foundUser._doc : null;
        } catch (err) {
            // TODO: Add loggin
            console.log(err)
        }
    }

    async function insert(userInfo){
        // Creates an user and return it
        if(!userInfo) return null;
        try {
            const created = await UserModel.create(userInfo);
            return created._doc;
        } catch (err) {
            // TODO: Add loggin
            console.log(err)
        }
    }

    async function update(query, updates){
        // Updates an user by id and return it
        if(!query) return null;
        try {
            const updatedUser = await UserModel.findOneAndUpdate(
                query, updates, { new: true }
            );
            return updatedUser ? updatedUser._doc : null;
        } catch (err) {
            // TODO: Add loggin
            console.log(err)
        }
    }

    async function remove(query){
        // Remove an user by id and return it
        if(!query) return null;
        try {
            const removedUser = await UserModel.findOneAndRemove(query);
            return removedUser ? removedUser._doc : null;
        } catch (err) {
            // TODO: Add loggin
            console.log(err)
        }
    }

}

module.exports = makeUserDb;