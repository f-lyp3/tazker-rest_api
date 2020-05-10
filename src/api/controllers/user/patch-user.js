function buildPatchUser({ listUser }){
    // A factory function for handling update requests
    return async function patchUser(id){
        try {
            const updated = await listUser({ id });
            if(!updated){
                return {
                    body: { error: "User not found!"},
                    statusCode: 404
                }
            }

            return { body: { updated }, statusCode: 200}
        } catch (e) {
            return {
                body: { error: e.message },
                statusCode: 401
            }
        }
    }
}

module.exports = buildPatchUser;