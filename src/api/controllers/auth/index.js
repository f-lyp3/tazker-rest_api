const AuthService = require("../../../services/auth");

const buildPostSignUp = require("./sign-up");
const buildPostSignIn = require("./sign-in");

const postSignUp = buildPostSignUp({ AuthService });
const postSignIn = buildPostSignIn({ AuthService });

module.exports = Object.freeze({
    postSignIn,
    postSignUp
});