function buildGetUser({ getUserById }){
    // A factory function for handling GET requests
    return async function getUser(id){
        try {
            // Retrive user form DB
            const user = await getUserById({ id });
            if(!user){
                // Not found! return 404
                return {
                    body: { error: "User not found!"},
                    statusCode: 404
                }
            }
            // Return the found user!
            return { body: { user }, statusCode: 200 }
        } catch (e) {
            // Other possible errors is user's fault!
            return {
                body: { error: e.message },
                statusCode: 401
            }
        }
    }
}

module.exports = buildGetUser;