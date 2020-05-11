function buildDeleteTask({ removeTask }){
    return async function deleteTask({ params }){
        const { id } = params;
        
        try {
            const deleted = await removeTask(id);
            
            return {
                body: { deleted },
                statusCode: 201
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