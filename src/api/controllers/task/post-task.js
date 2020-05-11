function buildPostTask({ createTask }){
    return  async function postTask({ body }){
        const taskInfo = body;
        
        try {
            posted = await createTask(taskInfo)
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