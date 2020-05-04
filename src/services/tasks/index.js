const { TaskDb } = require("../../database");

const { isValidID } = require("../../entities/validators");

const buildGetTask = require("./get-task");
const buildCreateTask = require("./create-task");
const buildUpdateTask = require("./update-task");
const buildRemoveTask = require("./remove-task")
const buildListTask         = require("./list-task"); 
const buildMakeComplete = require("./make-completed");

const getTask = buildGetTask({TaskDb, isValidID})
const createTask = buildCreateTask({ TaskDb, isValidID })
const updateTask = buildUpdateTask({ TaskDb, isValidID })
const removeTask = buildRemoveTask({ TaskDb, isValidID });
const listTask = buildListTask({ TaskDb })
const makeCompleted = buildMakeComplete({ TaskDb, isValidID });

module.exports = Object.freeze({
    getTask,
    createTask,
    listTask,
    updateTask,
    makeCompleted,
    removeTask
});