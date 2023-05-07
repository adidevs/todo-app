const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
    {
        title: {
            type: "String",
            required: true
        },
        description: {
            type: "String"
        },
        date: {
            type: "String"
        }
    }
);

const AccountSchema = new mongoose.Schema(
    {
        username: {
            type: "String",
            required: true,
            unique: true
        },
        password: {
            type: "String",
            required: true
        },
        tasks: [TaskSchema]
    }
);


const Task = mongoose.model("task", TaskSchema);
const Account = mongoose.model("account", AccountSchema);

module.exports = Task;
module.exports = Account;