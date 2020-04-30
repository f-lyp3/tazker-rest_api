const { mustHaveError } = require("../utils/errors");
const { isValidEmail } = require("./validators");

const buildMakeUser = require("./user");

const makeUser = buildMakeUser({ mustHaveError, isValidEmail });

module.exports = Object.freeze({
    makeUser
})