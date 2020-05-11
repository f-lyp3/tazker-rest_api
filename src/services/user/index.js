const { UserDb } = require("../../database");
const { hashPassword } = require("../auth/passwords");

const { isValidID, isValidEmail } = require("../../entities/validators");

const buildCreateUser = require("./create-user");
const buildGetUserByEmail = require("./get-byEmail");
const buldGetUserById = require("./get-byId");
const buildUpdateUser = require("./update-user");
const buildRemoveUser = require("./remove-user");


const createUser = buildCreateUser({ UserDb, hashPassword });
const updateUser = buildUpdateUser({ UserDb, isValidID, hashPassword });
const removeUser = buildRemoveUser({ UserDb, isValidID });
const getUserByEmail = buildGetUserByEmail({ UserDb, isValidEmail });
const getUserById = buldGetUserById({ UserDb, isValidID });

module.exports = Object.freeze({
    createUser,
    getUserById,
    getUserByEmail,
    updateUser,
    removeUser
});