const UserService = require("../../../services/user");

const buildGeUser = require("./get-user");
const buildPutUser = require("./put-user");
const buildDeleteUser = require("./delete-user");

const getUser = buildGeUser(UserService);
const putUser = buildPutUser(UserService);
const deleteUser = buildDeleteUser(UserService);

const UserController = Object.freeze({
    getUser,
    putUser,
    deleteUser
});

module.exports = UserController;