function makeGetTaskById({ TaskDb, isValidID }){

    return async function getTaskById ({ id }){
        if(!id || !isValidID(id)) throw new Error("Invalid task's id!");
        return await TaskDb.findById(id);
    }

}

module.exports = makeGetTaskById;