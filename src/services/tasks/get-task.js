function makeGetTask({ TaskDb, isValidID }){

    return async function getTask ({ id }){
        if(!id || !isValidID(id)) throw new Error("Invalid task's id!");

        return await TaskDb.findById(id);
    }

}

module.exports = makeGetTask;