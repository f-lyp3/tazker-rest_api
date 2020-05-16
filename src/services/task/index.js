const { TaskDb } = require("../../database");

const { isValidID } = require("../../utils/validators");

const buildFindTask = require("./find-task");
const buildAddTask = require("./add-task");
const buildUpdateTask = require("./update-task");
const buildRemoveTask = require("./remove-task")
const buildListTask   = require("./list-task"); 
const buildMakeTaskComplete = require("./make-task-complete");

const findTask = buildFindTask({TaskDb, isValidID})
const addTask = buildAddTask({ TaskDb, isValidID })
const updateTask = buildUpdateTask({ TaskDb, isValidID })
const removeTask = buildRemoveTask({ TaskDb, isValidID });
const listTask = buildListTask({ TaskDb })
const makeTaskComplete = buildMakeTaskComplete({ TaskDb, isValidID });

module.exports = Object.freeze({
    findTask,
    addTask,
    listTask,
    updateTask,
    makeTaskComplete,
    removeTask
});