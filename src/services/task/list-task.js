function buildListTask({ TaskDb }){
    return async function list({ ...query } = {}){
        const foundTasks = await TaskDb.findAll(query)
        return foundTasks;        
    }
}

module.exports = buildListTask;