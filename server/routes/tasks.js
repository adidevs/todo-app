const express = require("express");
const { getTasks, createTasks, deleteTasks, createAccount, checkAccount } = require("../controllers/tasks");
const router = express.Router();

router.get("/:username", getTasks);
router.post("/create/:username", createTasks);
router.post("/delete", deleteTasks);
router.post("/signup", createAccount);
router.get("/signin/:user/:password", checkAccount);

module.exports = router;