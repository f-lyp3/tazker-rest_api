const { makeTask } = require("../../entities")

function buildUpdateTask({ TaskDb, isValidID }){

    return async function update({ id, ...otherTaskInfo }, updates){
        // Check if the given id is valid one.
        if(!id || !isValidID(id)) throw new Error("Must provide a valid task id!");

        // Task doesn't exists. return null
        const existing = await TaskDb.find({ _id: id, ...otherTaskInfo });
        if(!existing) return null;
        
        const notAllowed = checkForNonAllowed(updates, ["name", "completed"])
        if(notAllowed.length)
            throw new Error(`Invalid updates fields! [${notAllowed.join(", ")}]`)

        // Mergin existing task with possible updates, and validate.
        makeTask({
            ...existing,
            ...updates
        });

        // Everything above is alright, the apply the updates.
        return await TaskDb.update({_id: id, ...otherTaskInfo }, {
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