const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
}, { timestamps: true });

module.exports = model("Users", UserSchema);