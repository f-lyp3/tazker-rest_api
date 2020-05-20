const { UserDb } = require("../../database");
const { hashPassword } = require("../auth/passwords");

const { isValidID, isValidEmail } = require("../../utils/validators");
const { filterSensitiveProps } = require("../../utils/normalizer");

const buildAddUser = require("./add-user");
const buildFindUserByEmail = require("./find-user-byEmail");
const buldFindUser = require("./find-user");
const buildUpdateUser = require("./update-user");
const buildRemoveUser = require("./remove-user");


const addUser = buildAddUser({ UserDb, hashPassword, filterSensitiveProps });
const updateUser = buildUpdateUser({
    UserDb, isValidID, hashPassword, filterSensitiveProps 
});
const removeUser = buildRemoveUser({ UserDb, isValidID, filterSensitiveProps });
const findUserByEmail = buildFindUserByEmail({
    UserDb, isValidEmail, filterSensitiveProps
});
const findUser = buldFindUser({ UserDb, isValidID, filterSensitiveProps });

module.exports = Object.freeze({
    addUser,
    findUser,
    findUserByEmail,
    updateUser,
    removeUser
});