const UserService = require("../../../services/user");

const buildGeUser = require("./get-user");
const buildPatchUser = require("./patch-user");
const buildDeleteUser = require("./delete-user");

const getUser = buildGeUser(UserService);
const patchUser = buildPatchUser(UserService);
const deleteUser = buildDeleteUser(UserService);

const UserController = Object.freeze({
    getUser,
    patchUser,
    deleteUser
});

module.exports = UserController;