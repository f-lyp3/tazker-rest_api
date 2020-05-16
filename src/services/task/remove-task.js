function buildRemoveTask({ TaskDb, isValidID }){
    return async function remove({ id, ...otherTaskInfo }){
        if(!id || !isValidID(id)) throw new Error("Must provide a valid task id!");

        return await TaskDb.remove({ _id: id, ...otherTaskInfo });
    }
}

module.exports = buildRemoveTask;