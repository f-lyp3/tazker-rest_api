function buildGetTask({ findTask }){
    return async function getTask({ params, realRequestObj }){
        const { id } = params;
        const { userId } = realRequestObj;
        
        try {
            const found = await findTask({ id, ownerId: userId });
            if(!found) {
                return {
                    body: { error: "Task not found!" },
                    statusCode: 404
                }
            }
            return { body: { found }, statusCode: 200 }
        } catch (e){
            return {
                body: {
                    error: e.message
                },
                statusCode: 400
            }
        }
    }
}

module.exports = buildGetTask;