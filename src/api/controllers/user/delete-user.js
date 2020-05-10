function buildDeleteUser({ removeUser }){
    // A factory function to handle DELETE users/<id>
    return async function deleteUser(id){
        try {
            const deleted = await removeUser({ id });
            // If nothing was deleted, user doesn't exists
            if(!deleted){
                return {
                    body: { error: "User not found!" },
                    statusCode: 404
                }
            }
            // Return the deleted user with status 200 OK!
            return { body: { deleted }, statusCode: 200 }
        } catch (e) {
            // Every other possible errors, is probabily from user's input.
            return {
                body: { error: e.message },
                statusCode: 401
            }
        }
    }
}

module.exports = buildDeleteUser;