const crypto = require("crypto");

const { mustHaveError } = require("../utils/errors");
const { capitalize } = require("../utils/normalizer");

const {
    isValidEmail,
    isValidID,
    isValidName,
    isFinePassword
} = require("../utils/validators");

const buildMakeUser = require("./user");
const buildMakeTask = require("./task");

const makeUser = buildMakeUser({
    mustHaveError, isValidEmail,
    isFinePassword, isValidName, capitalize
});

const makeTask = buildMakeTask({mustHaveError, isValidID, makeHash})

module.exports = Object.freeze({
    makeUser,
    makeTask
});

function makeHash(keystring){
    return crypto
    .createHash('md5')
    .update(keystring, 'utf-8')
    .digest('hex');
}