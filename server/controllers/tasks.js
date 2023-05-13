const Account = require("../models/tasks.js");

exports.getTasks = async (req, res) => { // get all tasks
    try {
        const user = req.params.username;
        await Account.find({ username: user })
            .then((result) => {
                return res.status(200).json(result); 
            })
            .catch((err) => {
                return res.status(404).json({ message: err.message });
            });
    } catch (error) {
        return res.status(500).json({ message: error.essage });
    }
}

exports.createTasks = async (req, res) => { // create a task
    try {
        const newTask = req.body;
        const user = req.params.username;
        await Account.findOneAndUpdate({ username: user }, { $push: { tasks: newTask } }, { new: true })
            .then((result) => {
                return res.status(200).json(result);
            })
            .catch((err) => {
                return res.status(400).json({ message: err.message });
            });
    } catch (error) {
        return res.status(500).json({ message: error.essage });
    }
};

exports.deleteTasks = async (req, res) => { // delete a task
    try {
        const user = req.body.username;
        const id = req.body.id;
        await Account.findOneAndUpdate(
            { username: user },
            { $pull: { tasks: { _id: id } } })
            .then((result) => {
                return res.status(200).json(result);
            })
            .catch((err) => {
                return res.status(404).json({ message: err.message });
            });
    } catch (error) {
        return res.status(500).json({ message: error.essage });
    }
};

exports.createAccount = async (req, res) => { // create an account
    try {
        const newAccount = req.body;
        await Account.insertMany(newAccount)
            .then((result) => {
                console.log(result);
                return res.status(200).json(result);
            })
            .catch((err) => {
                return res.status(409).json({ message: err.message });
            });

    } catch (error) {
        return res.status(500).json({ message: error.message});
    }
};

exports.checkAccount = async (req, res) => { // check if an account exists
    try {
        const user = req.params.user;
        const passcode = req.params.password;
        await Account.findOne({ username: user, password: passcode })
            .then((result) => {
                return res.status(200).json(result);
            })
            .catch((err) => {
                console.log(err);
                return res.status(404).json({ message: err.message });
            });
    } catch (error) {
        return res.status(500).json({ message: error.essage });
    }
};
