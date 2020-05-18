function buildPostTask({ addTask }){
    return  async function postTask({ body, realRequestObj }){
        const { userId } = realRequestObj;

        const taskInfo = {
            ...body,
            ownerId: userId
        }
        
        try {
            posted = await addTask(taskInfo)
            if(!posted) return {
                body: {
                    error: "Internal Server Error"
                }, statusCode: 500
            }
            return {
                body: { posted },
                statusCode: 201
            }
        } catch (e) {
            return {
                body: {
                    error: e.message
                }, statusCode: 400
            };
        }
    }
}

module.exports = buildPostTask;