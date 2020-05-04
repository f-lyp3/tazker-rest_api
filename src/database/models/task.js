const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
    name: {
        type: String
    },
    authorID: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    parentID: {
        type: Schema.Types.ObjectId,
        ref: "Tasks"
    },
    hash: {
        type: String
    }
}, { timestamps: true });

module.exports = model("Tasks", TaskSchema);