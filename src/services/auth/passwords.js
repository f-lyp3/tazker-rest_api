const bcrypt = require("bcryptjs");

module.exports = Object.freeze({
    isMatch,
    hashPassword
});

async function isMatch(password, target){
   return await bcrypt.compare(password, target);
}
    
async function hashPassword(password){
    return await bcrypt.hash(password, 8);
}