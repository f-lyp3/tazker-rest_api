function buildListTask({ listTask }){
    return async ({ query, realRequestObj }) => {
        const { userId } = realRequestObj;
        try {
            const tasks = await listTask({ ...query, ownerId: userId });

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