function makeTaskDb ({ TaskModel }) {
    return Object.freeze({
        findAll,
        findById,
        findByHash,
        insert,
        updateById,
        removeById
    })

    async function findAll (query = {}) {
        try {
            const results = await TaskModel.find(query);
            const foundTasks = Array.from(results, task => task._doc);
            return foundTasks;
        } catch (err){
            console.log(err.message);
        }
    }
    async function findById (taskID) {
        try {
            const foundTask = await TaskModel.findById(taskID);
            // If found a Task returns it doc representation, else return null.
            return foundTask ? foundTask._doc: null;
        } catch (err){
            console.log(err.message);
        }
    }

    async function findByHash (taskHash) {
        try {
            const foundTask = await TaskModel.findOne({ hash: taskHash });
            // If found a Task returns it doc representation, else return null.
            return foundTask ? foundTask._doc: null;
        } catch (err){
            console.log(err.message);
        }
    }

    async function insert (taskInfo) {
        try {
            const createdTask = await TaskModel.create(taskInfo);
            return createdTask._doc;
        } catch(err){
            console.log(err.message)
        }
    }
    async function updateById (taskID, updates) {
        try {
            const updatedTask = await TaskModel.findByIdAndUpdate(taskID, updates, {new: true});
            return updatedTask ? updatedTask._doc: null;
        } catch (err) {
            console.log(err.message)
        }
    }
    async function removeById (taskID) {
        try {
            const removedTask = await TaskModel.findByIdAndRemove(taskID);
            return removedTask ? removedTask._doc: null;
        } catch (err) {
            console.log(err.message)
        }
    }
}

module.exports = makeTaskDb;