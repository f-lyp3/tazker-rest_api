"use strict";

// import express.Router as a constructor, so no route will be overrited
// by sharing the same Router instance ;)

const Router = require("express").Router;


const expressCallbackHelper = require("../express-callback-helper");

// Loading Controllers
const AuthController = require("../controllers/auth");
const UserController = require("../controllers/user");
const TaskController = require("../controllers/task");

const makeAuthRoutesHandler = require("./auth.routes");
const makeUserRoutesHandler = require("./user.routes");
const makeTaskRoutesHandler = require("./task.routes");

const AuthRoutesHandler = makeAuthRoutesHandler(
    { router: new Router(), expressCallbackHelper, AuthController }
);

const UserRoutesHandler = makeUserRoutesHandler(
    { router: new Router(), expressCallbackHelper,
        UserController, AuthController}
);

const TaskRoutesHandler = makeTaskRoutesHandler(
    { router: new Router(), expressCallbackHelper,
        TaskController, AuthController }
);


module.exports = Object.freeze({
    AuthRoutesHandler,
    UserRoutesHandler,
    TaskRoutesHandler
});