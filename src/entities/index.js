const crypto = require("crypto");

const { mustHaveError } = require("../utils/errors");
const { isValidEmail, isValidID } = require("./validators");

const buildMakeUser = require("./user");
const buildMakeTask = require("./task");

const makeUser = buildMakeUser({ mustHaveError, isValidEmail });
const makeTask = buildMakeTask({mustHaveError, isValidID, makeHash})

module.exports = Object.freeze({
    makeUser
});

function makeHash(keystring){
    return crypto
    .createHash('md5')
    .update(text, 'utf-8')
    .digest('hex');
}