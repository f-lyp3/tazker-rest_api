const { TaskDb } = require("../../database");

const { isValidID } = require("../../entities/validators");

const buildGetTaskById = require("./get-taskById");
const buildCreateTask = require("./create-task");
const buildUpdateTask = require("./update-task");
const buildRemoveTask = require("./remove-task")
const buildListTask   = require("./list-task"); 
const buildMakeComplete = require("./make-completed");

const getTaskById = buildGetTaskById({TaskDb, isValidID})
const createTask = buildCreateTask({ TaskDb, isValidID })
const updateTask = buildUpdateTask({ TaskDb, isValidID })
const removeTask = buildRemoveTask({ TaskDb, isValidID });
const listTask = buildListTask({ TaskDb })
const makeCompleted = buildMakeComplete({ TaskDb, isValidID });

module.exports = Object.freeze({
    getTaskById,
    createTask,
    listTask,
    updateTask,
    makeCompleted,
    removeTask
});