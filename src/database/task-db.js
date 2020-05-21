const makeId = require("../utils/makeId");

function makeTaskDb ({ TaskModel }) {
    return Object.freeze({
        findAll,
        find,
        findByHash,
        insert,
        update,
        remove
    })

    async function findAll ({max, before, after, ...otherQueryParams} = {}) {
        try {
            
            let query = {};

            if(after){
                query = after ? {
                        ...otherQueryParams,
                        _id : { $gt: makeId(after) }
                    } : { ...otherQueryParams };

            } else if(before) {
                query = before ? {
                        ...otherQueryParams,
                        _id : { $lt: makeId(before) }
                    } : { ...otherQueryParams };
            } else {
                query = { ...otherQueryParams };
            }            

            const results = await TaskModel.find(query).limit(max);
            const foundTasks = Array.from(results, task => task._doc);
            return foundTasks;
        } catch (err){
            console.log(err.message);
        }
    }

    async function find (query) {
        // Finds a single task, if query not provided return null
        if(!query) return null;
        try {
            const foundTask = await TaskModel.findOne(query);
            // If found a Task returns it doc representation, else return null.
            return foundTask ? foundTask._doc: null;
        } catch (err){
            console.log(err.message);
        }
    }

    async function findByHash (query) {
        if(!query) return null;
        try {
            const foundTask = await TaskModel.findOne(query);
            // If found a Task returns it doc representation, else return null.
            return foundTask ? foundTask._doc: null;
        } catch (err){
            console.log(err.message);
        }
    }

    async function insert (taskInfo) {
        if(!taskInfo) return null;
        try {
            const createdTask = await TaskModel.create(taskInfo);
            return createdTask._doc;
        } catch(err){
            console.log(err.message)
        }
    }

    async function update (query, updates) {
        if(!query) return null;
        try {
            const updatedTask = await TaskModel.findOneAndUpdate(query, updates, {new: true});
            return updatedTask ? updatedTask._doc: null;
        } catch (err) {
            console.log(err.message)
        }
    }

    async function remove (query) {
        if(!query) return null;
        try {
            const removedTask = await TaskModel.findOneAndRemove(query);
            return removedTask ? removedTask._doc: null;
        } catch (err) {
            console.log(err.message)
        }
    }

}

module.exports = makeTaskDb;