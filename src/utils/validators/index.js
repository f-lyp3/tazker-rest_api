// Loading all validators
const isValidID = require("./is-valid-id");
const isValidEmail = require("./is-valid-email")
const isValidName = require("./is-valid-name");
const isFinePassword = require("./is-fine-pwd");

// Exports an end point for validators
module.exports = Object.freeze({
    isValidID,
    isFinePassword,
    isValidEmail,
    isValidName
})