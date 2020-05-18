function buildPatchTask({ updateTask }){
    return async function patchTask({ body, params, realRequestObj }) {
        const { id } = params;
        const updates = body;
        const { userId } = realRequestObj;

        try {
            const updated = await updateTask({ id, ownerId: userId }, updates);
            if(!updated){
                return {
                    body: { error: "Task not found!" },
                    statusCode: 404
                }
            }
            return {
                body: { updated },
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

module.exports = buildPatchTask;