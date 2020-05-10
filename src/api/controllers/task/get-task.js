function buildGetTask({ getTaskById }){
    return async function getTask(id){
        try {
            const found = await getTaskById({ id: id });
            if(!found) {
                return {
                    body: { error: "Task does not exists!" },
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