function buildRemoveTask({ TaskDb, isValidID }){
    return async function remove(id){
        if(!id || !isValidID(id)) throw new Error("Invalid task id!");

        const removed = await TaskDb.removeById(id);

        if(!removed) throw new Error("Task not found!")
        
        return removed;
    }
}

module.exports = buildRemoveTask;