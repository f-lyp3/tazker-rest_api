"use strict";

function buildmakeTask({ mustHaveError, isValidID, makeHash }){
    return function makeTask({
        name, // name of the task
        authorID, // the owner id, the user creating the task
        parentID // If supplied it'll be interpreted as subtask of this tasks's id
    } = {}){
        // Must have a name
        if(!name) throw mustHaveError("Task", "a name");
        // Must have a valid owner
        if(!authorID) throw mustHaveError("Task", "author's id");
        if(!isValidID(authorID)) throw new Error("Invalid Author's id!");

        // Parent's id must be valid
        if(parentID && !isValidID(parentID)) throw new Error("Invalid parent's id!");

        // Creates a hash based on author's id and task's name to prevent duplicates from the same user
        const hash = makeHash(name.concat(authorID))

        return Object.freeze({
            getName : () => name,
            getAuthorID: () => authorID,
            getParentID: () => parentID,
            getHash: () => hash
        });
    }
}

module.exports = buildmakeTask;