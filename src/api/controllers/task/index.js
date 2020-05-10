const TaskService = require("../../../services/tasks");

const buildPostTask = require("./post-task");
const buildGetTask = require("./get-task");
const buildListTask = require("./get-task");
const buildPutTask = require("./put-task");
const buildDeleteTask = require("./delete-task");

const postTask = buildPostTask(TaskService);
const getTask = buildGetTask(TaskService);
const getTasks = buildListTask(TaskService);
const putTask = buildPutTask(TaskService);
const deleteTask = buildDeleteTask(TaskService);


module.exports = Object.freeze({
    postTask,
    getTask,
    getTasks,
    putTask,
    deleteTask
});