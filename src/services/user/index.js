const { UserDb } = require("../../database");
const { hashPassword } = require("../auth/passwords");

const { isValidID, isValidEmail } = require("../../utils/validators");

const buildAddUser = require("./add-user");
const buildFindUserByEmail = require("./find-user-byEmail");
const buldFindUser = require("./find-user");
const buildUpdateUser = require("./update-user");
const buildRemoveUser = require("./remove-user");


const addUser = buildAddUser({ UserDb, hashPassword });
const updateUser = buildUpdateUser({ UserDb, isValidID, hashPassword });
const removeUser = buildRemoveUser({ UserDb, isValidID });
const findUserByEmail = buildFindUserByEmail({ UserDb, isValidEmail });
const findUser = buldFindUser({ UserDb, isValidID });

module.exports = Object.freeze({
    addUser,
    findUser,
    findUserByEmail,
    updateUser,
    removeUser
});