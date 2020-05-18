function buildDeleteTask({ removeTask }){
    return async function deleteTask({ params, realRequestObj }){
        const { id } = params;
        const { userId } = realRequestObj
        try {
            const deleted = await removeTask({ id, ownerId: userId });
            if(!deleted){
                return {
                    body: { error: "Task not found!" },
                    statusCode: 404
                }
            }
            return {
                body: { deleted },
                statusCode: 200
            }
        } catch (e) {
            return {
                body: { error: e.message },
                statusCode: 400
            }
        }
    }
}

module.exports = buildDeleteTask;