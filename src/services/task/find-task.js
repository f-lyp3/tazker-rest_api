function makeFindTask({ TaskDb, isValidID }){

    return async function findTask ({ id, ...otherTaskInfo }){
        if(id && !isValidID(id)) throw new Error("Must provide a valid task id!");
        return await TaskDb.find({ _id: id, ...otherTaskInfo });
    }

}

module.exports = makeFindTask;