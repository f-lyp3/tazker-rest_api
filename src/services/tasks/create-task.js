const { makeTask } = require("../../entities")

function buildCreateTask({ TaskDb }){
    return async function create(taskInfo){
        const task = makeTask(taskInfo);

        // Allow not duplicates, if task hash already exist return existing task
        // Does direfenents users can have task with same name, because :
        // hash => createHash(@String(task.name + task.authorID + task.parentID))
        const existingTask = await TaskDb.findByHash(task.getHash())
        if(existingTask) {
            return existingTask;
        }
        
        if(task.getParentID()){
            const exist = await TaskDb.findById(task.getParentID());
            if(!exist) throw new Error("Task parent doesn't exists")
        }
        
        return await TaskDb.insert({
            name: task.getName(),
            authorID: task.getAuthorID(),
            parentID: task.getParentID(),
            hash: task.getHash()
        });
    }
}

module.exports = buildCreateTask;