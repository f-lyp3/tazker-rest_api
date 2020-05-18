const { makeTask } = require("../../entities")

function buildAddTask({ TaskDb }){
    return async function addTask(taskInfo){
        const task = makeTask(taskInfo);

        // Allow not duplicates, if task hash already exist return existing task
        // Does direfenents users can have task with same name, because :
        // hash => createHash(@String(task.name + task.authorID + task.parentID))
        const existingTask = await TaskDb.findByHash({
            hash: task.getHash()
        }
        )
        if(existingTask) {
            return existingTask;
        }
        
        if(task.getParentId()){
            const exist = await TaskDb.find(
                { _id: task.getParentId(), ownerId: task.getOwnerId }
            );
            if(!exist) throw new Error("Task parent not found!")
        }
        
        return await TaskDb.insert({
            name: task.getName(),
            ownerId: task.getOwnerId(),
            parentId: task.getParentId(),
            hash: task.getHash()
        });
    }
}

module.exports = buildAddTask;