const { makeTask } = require("../../entities")

function buildCreateTask({ TaskDb }){
    return async function create(taskInfo){
        const task = makeTask(taskInfo);
        
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