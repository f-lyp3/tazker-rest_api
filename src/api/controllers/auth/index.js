const AuthService = require("../../../services/auth");

const buildPostSignUp = require("./sign-up");
const buildPostSignIn = require("./sign-in");
const buildIsAuthenticated = require("./is-authenticated");

const postSignUp = buildPostSignUp({ AuthService });
const postSignIn = buildPostSignIn({ AuthService });
const isAuthenticated = buildIsAuthenticated({ AuthService });

module.exports = Object.freeze({
    postSignIn,
    postSignUp,
    isAuthenticated
});