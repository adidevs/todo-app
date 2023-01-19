const express = require("express");
const { getTasks, createTasks, deleteTasks } = require("../controllers/tasks");
const router = express.Router();

router.get("/", getTasks);
router.post("/", createTasks);
router.get("/:id", deleteTasks);

module.exports = router;