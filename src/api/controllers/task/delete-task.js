function buildDeleteTask({ removeTask }){
    return async function deleteTask({ params }){
        const { id } = params;
        
        try {
            const deleted = await removeTask({ id });
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