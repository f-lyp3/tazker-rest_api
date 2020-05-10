function buildListTask({ listTask }){
    return async function getTask(query){
        try {
            const tasks = await listTask(query);

            return { body: { tasks }, statusCode: 200 }
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

module.exports = buildListTask;