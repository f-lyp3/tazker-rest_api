const { mustHaveError } = require("../utils/errors");

const buildMakeUser = require("./user");

const makeUser = buildMakeUser({ mustHaveError });

module.exports = Object.freeze({
    makeUser
})