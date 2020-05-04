"use strict";

function buildmakeTask({ mustHaveError, isValidID, makeHash }){
    return function makeTask({
        name,
        authorID,
        parentID
    } = {}){
        
        if(!name) throw mustHaveError("Task", "name");
        if(!authorID) throw mustHaveError("Task", "author's id");
        if(!isValidID(authorID)) throw new Error("Invalid Author's id!");
        if(!isValidID(parentID)) throw mustHaveError("Subtask", "task parent's id");

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