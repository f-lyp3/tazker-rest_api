function buildGetMe({ findUser }){
    // A factory function for handling GET requests
    return async function getMe({ realRequestObj }){
        const { userId } = realRequestObj;
        try {
            // Retrive user from DB
            const found = await findUser({ id: userId });
            if(!found){
                // Not found! return 404
                return {
                    body: { error: "User not found!"},
                    statusCode: 404
                }
            }
            // Return the found user!
            return { body: { found }, statusCode: 200 }
        } catch (e) {
            // Other possible errors is user's fault!
            return {
                body: { error: e.message },
                statusCode: 400
            }
        }
    }
}

module.exports = buildGetMe;