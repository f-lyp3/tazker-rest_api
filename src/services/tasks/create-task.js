const { makeTask } = require("../../entities")

function buildCreateTask({ TaskDb }){
    return async function create(taskInfo){
        const task = makeTask(taskInfo);

        if(taskInfo.parent){
            const exist = await TaskDb.findById(taskInfo.parent);
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