const { isValidObjectId } = require("mongoose");

module.exports = function isValidID(id){
    if(!id) return false
    return isValidObjectId(id)
}