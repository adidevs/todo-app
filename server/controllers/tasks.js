const Task = require("../models/tasks.js");


exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({ message: error.essage });
    }
}

exports.createTasks = async (req, res) => {
    try {
        const newTask = req.body;
        await Task.insertMany(newTask);
        res.status(200);
    } catch (error) {
        res.json({ message: error.essage });
    }
};

exports.deleteTasks =  async (req, res) => {
    try {
        await Task.findByIdAndRemove(req.params.id);
        res.status(200);
    } catch (error) {
        console.log("ERROR"+res.status);
        res.json({ message: error.essage });
    }
};