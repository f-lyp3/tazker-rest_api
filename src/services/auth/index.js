const jsonwebtoken = require("jsonwebtoken");

const { APP_SECRET } = require("../../../config/config");

const { isMatch } = require("./passwords");

const UserService = require("../user")

const buildSignIn = require("./sign-in");
const buildSignUp = require("./sign-up");

const signIn = buildSignIn({ authenticate, isMatch, UserService});
const signUp = buildSignUp({ authenticate,  UserService})


module.exports = Object.freeze({
    signIn,
    signUp
});

async function authenticate(userId){
    const token = await generateToken(userId);

    return Object.freeze({
        user: userId,
        token
    });
}


async function generateToken(userId){
    return await jsonwebtoken.sign({ userId }, APP_SECRET);
}