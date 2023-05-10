const Task = require("../models/tasks.js");
const Account = require("../models/tasks.js");

exports.getTasks = async (req, res) => { // get all tasks
    try {
        const user = req.body.username;
        const account = await Account.find({ username: user });
        res.status(200).json(account[0]);
    } catch (error) {
        res.status(404).json({ message: error.essage });
    }
}

exports.createTasks = async (req, res) => { // create a task
    try {
        const newTask = req.body;
        const user = req.body.username;
        await Account.findOneAndUpdate({ username: user }, { $push: { tasks: newTask } }, { new: true },
            (err, account) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(account);
                }
            });
        res.status(200);
    } catch (error) {
        res.json({ message: error.essage });
    }
};

exports.deleteTasks = async (req, res) => { // delete a task
    const user = req.body.username;
    const id = req.body.id;
    try {
        await Account.findOneAndUpdate(
            { username: user },
            { $pull: { tasks: { _id: id } } },
            { new: true },
        );
        res.status(200);
    } catch (error) {
        res.json({ message: error.essage });
    }
};

exports.createAccount = async (req, res) => { // create an account
    try {
        const newAccount = req.body;
        const result = await Account.insertMany(newAccount);
        res.json();

    } catch (error) {
        res.json();
        console.log(error.message);
    }
};

exports.checkAccount = async (req, res) => { // check if an account exists
    try {
        const user = req.params.user;
        const passcode = req.params.password;
        const account = await Account.findOne({ username: user, password: passcode });
        res.json(account);
    } catch (error) {
        res.status(404).json({ message: error.essage });
    }
};
