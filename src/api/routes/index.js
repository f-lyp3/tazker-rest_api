const router = require("express").Router();

const expressCallbackHelper = require("../express-callback-helper");

// Loading Controllers
const AuthController = require("../controllers/auth");
const UserController = require("../controllers/user");

const makeAuthRoutesHandler = require("./auth.routes");
const makeUserRoutesHandler = require("./user.routes");

const AuthRoutesHandler = makeAuthRoutesHandler(
    { router, expressCallbackHelper, AuthController }
);

const UserRoutesHandler = makeUserRoutesHandler(
    { router, expressCallbackHelper, UserController}
);


module.exports = Object.freeze({
    AuthRoutesHandler,
    UserRoutesHandler
});