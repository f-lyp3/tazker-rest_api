function buildPutUser({ updateUser }){
    // A factory function for handling update requests
    return async function putUser({ realRequestObj, body }){
        const { userId } = realRequestObj
        const updates = body;
        try {
            const updated = await updateUser({id: userId}, updates);
            if(!updated){
                return {
                    body: { error: "User not found!"},
                    statusCode: 404
                }
            }

            return { body: { updated }, statusCode: 200}
        } catch (e) {
            console.log(e)
            return {
                body: { error: e.message },
                statusCode: 400
            }
        }
    }
}

module.exports = buildPutUser;