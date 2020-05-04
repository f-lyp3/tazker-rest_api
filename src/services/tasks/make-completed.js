const { makeTask } = require("../../entities")

function buildMakeCompletedTask({ TaskDb, isValidID }){

    return async function makeCompleted({ id }){
        // Check if the given id is valid one.
        if(!id || !isValidID(id)) throw new Error("Invalid task id!");

        // Check if corresponding task's id exists. throw an error if so
        const existing = await TaskDb.findById(id);
        if(!existing) throw new Error("Task doesn't exists!")

        // Everything above is alright, the apply the updates.
        return await TaskDb.updateById(id, {
            completed: true
        });
    }
}

module.exports = buildMakeCompletedTask;