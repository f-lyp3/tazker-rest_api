"use strict";

function buildmakeTask({
    mustHaveError,
    isValidID,
    makeHash,
    capitalizeText
}){
    return function makeTask({
        name, // name of the task
        ownerId, // the owner's id, the user creating the task
        // If supplied it'll be interpreted as subtask of this tasks's id
        parentId = null 
    } = {}){
        // Must have a name
        if(!name) throw mustHaveError("Task", "a name");
        // Must have a valid owner
        if(!ownerId) throw mustHaveError("Task", "author's id");
        if(!isValidID(ownerId)) throw new Error("Invalid Author's id!");

        // Parent's id must be valid
        if(parentId && !isValidID(parentId)) throw new Error("Invalid parent's id!");

        // Creates a hash based on author's id
        // and task's name to prevent duplicates from the same user
        const hash = makeHash(`${name}${parentId}${ownerId}`);

        return Object.freeze({
            getName : () => capitalizeText(name),
            getOwnerId: () => ownerId,
            getParentId: () => parentId,
            getHash: () => hash
        });
    }
}

module.exports = buildmakeTask;