const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
    {
        title:{
            type: "String",
            required: true
        },
        description:{
            type: "String"
        },
        date:{
            type: "String"
        },
        user:{
            type: "String",
            required: true
        }
    }
);

const UserSchema = new mongoose.Schema(
    {
        userid:{
            type: "String",
            required: true
        },
        password:{
            type: "String",
            required: true
        }
    }
);

const Task = mongoose.model("task", TaskSchema);
const User = mongoose.model("user", UserSchema);

module.exports = Task;
module.exports = User;