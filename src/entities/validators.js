const isValidID = require("../utils/isValisID");

function isValidEmail(email){
    // Validate the email
    const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    return emailRegex.test(email)
}

module.exports = Object.freeze({
    isValidEmail,
    isValidID
});