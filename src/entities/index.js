const crypto = require("crypto");

const { mustHaveError } = require("../utils/errors");
const {
    capitalizeWord,
    capitalizeText
} = require("../utils/normalizer");

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
    isFinePassword, isValidName, capitalizeWord
});

const makeTask = buildMakeTask({
    mustHaveError,
    isValidID,
    makeHash,
    capitalizeText
})

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