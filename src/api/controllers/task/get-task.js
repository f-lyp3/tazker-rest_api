function buildGetTask({ getTaskById }){
    return async function getTask({ params }){
        const { id } = params;
        
        try {
            const found = await getTaskById({ id: id });
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