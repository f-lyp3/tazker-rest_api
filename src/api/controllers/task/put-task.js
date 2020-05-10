function buildPatchTask({ updateTask }){
    return async function patchTask(id, updates) {
        try {
            const updated = await updateTask(id, updates);
            return {
                body: { updated },
                statusCode: 201
            }
        } catch (e) {
            return {
                body: { error: e.message },
                statusCode: 401
            }
        }
    }
}

module.exports = buildPatchTask;