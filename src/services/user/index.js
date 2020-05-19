const { UserDb } = require("../../database");
const { hashPassword } = require("../auth/passwords");

const { isValidID, isValidEmail } = require("../../utils/validators");
const { noSensitive } = require("../../utils/normalizer");

const buildAddUser = require("./add-user");
const buildFindUserByEmail = require("./find-user-byEmail");
const buldFindUser = require("./find-user");
const buildUpdateUser = require("./update-user");
const buildRemoveUser = require("./remove-user");


const addUser = buildAddUser({ UserDb, hashPassword, noSensitive });
const updateUser = buildUpdateUser({
    UserDb, isValidID, hashPassword, noSensitive 
});
const removeUser = buildRemoveUser({ UserDb, isValidID, noSensitive });
const findUserByEmail = buildFindUserByEmail({
    UserDb, isValidEmail, noSensitive
});
const findUser = buldFindUser({ UserDb, isValidID, noSensitive });

module.exports = Object.freeze({
    addUser,
    findUser,
    findUserByEmail,
    updateUser,
    removeUser
});