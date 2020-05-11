const router = require("express").Router();

const expressCallbackHelper = require("../express-callback-helper");

// Loading Controllers
const AuthController = require("../controllers/auth");

const makeAuthRoutesHandler = require("./auth.routes");

const AuthRoutesHandler = makeAuthRoutesHandler(
    { router, expressCallbackHelper, AuthController }
);


module.exports = Object.freeze({
    AuthRoutesHandler
});