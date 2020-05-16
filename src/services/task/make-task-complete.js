const { makeTask } = require("../../entities")

function buildMakeCompletedTask({ TaskDb, isValidID }){

    return async function makeCompleted({ id, ...otherTaskInfo }){
        // Check if the given id is valid one.
        if(!id || !isValidID(id)) throw new Error("Must provide a valid task id!");

        // Check if corresponding task's id exists. throw an error if so
        const existing = await TaskDb.find({_id: id, ...otherTaskInfo });
        if(!existing) return null

        // Everything above is alright, the apply the updates.
        return await TaskDb.update({ _id: id, ...otherTaskInfo }, {
            completed: true
        });
    }
}

module.exports = buildMakeCompletedTask;