const jwt = require("jsonwebtoken");
const { APP_SECRET } = require("../../../config/config");


async function authenticate(userId){
    const token = await generateToken(userId);

    return Object.freeze({
        user: userId,
        token
    });
}


async function generateToken(userId){
    return await jwt.sign({ userId }, APP_SECRET);
}

async function getUserIdFromAuthToken(token){
    const { userId } = await jwt.verify(token, APP_SECRET);

    return userId;
}

module.exports = Object.freeze({
    authenticate,
    getUserIdFromAuthToken
});