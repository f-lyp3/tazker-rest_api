const UserService = require("../../../services/user");

const buildGeUser = require("./get-user");
const buildPutUser = require("./put-user");
const buildDeleteUser = require("./delete-user");
const buildGetMe = require("./get-me");

const getUser = buildGeUser(UserService);
const getMe = buildGetMe(UserService);
const putUser = buildPutUser(UserService);
const deleteUser = buildDeleteUser(UserService);

const UserController = Object.freeze({
    getUser,
    getMe,
    putUser,
    deleteUser
});

module.exports = UserController;