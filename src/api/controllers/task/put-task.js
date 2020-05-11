function buildPatchTask({ updateTask }){
    return async function patchTask({ body, params }) {
        const { id } = params;
        const updates = body;

        try {
            const updated = await updateTask(id, updates);
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