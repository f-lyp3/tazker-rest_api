const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    firstname: {
        type: String
    },
    lastname: {
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