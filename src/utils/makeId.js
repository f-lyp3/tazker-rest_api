const { Types } = require("mongoose");

module.exports = function makeId(stringId){
    return Types.ObjectId(stringId);
}