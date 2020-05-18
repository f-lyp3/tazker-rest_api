const { isMatch } = require("./passwords");
const { authenticate, getUserIdFromAuthToken } = require("./json-web-token");

const UserService = require("../user")

const buildSignIn = require("./sign-in");
const buildSignUp = require("./sign-up");

const signIn = buildSignIn({ authenticate, isMatch, UserService});
const signUp = buildSignUp({ authenticate,  UserService})


module.exports = Object.freeze({
    signIn,
    signUp,
    getUserIdFromAuthToken
});