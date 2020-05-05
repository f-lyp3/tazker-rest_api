const { makeTask } = require("../../entities")

function buildUpdateTask({ TaskDb, isValidID }){

    return async function update({ id, ...updates }){
        // Check if the given id is valid one.
        if(!id || !isValidID(id)) throw new Error("Invalid task id!");

        // Check if corresponding task's id exists. throw an error if so
        const existing = await TaskDb.findById(id);
        if(!existing) throw new Error("Task doesn't exists!")

        const notAlloweds = checkForNonAllowed(updates, ["name", "description"])
        if(notAlloweds.length) throw new Error(`Invalid updates fields! [${notAlloweds.join(", ")}]`)

        // Mergin existing task with possible updates, and validate.
        makeTask({
            ...existing,
            ...updates
        });

        // Everything above is alright, the apply the updates.
        return await TaskDb.updateById(id, {
            ...updates
        });
    }

    function checkForNonAllowed(updates, allowed){
        // check for every non updates fields
        const notAllowed = []
        Object.keys(updates).map(update => {
            if(allowed.includes(update) === false) {
                notAllowed.push(update)
            }
        });
        // return an array of non updates fields
        return notAllowed;
    }
}

module.exports = buildUpdateTask;