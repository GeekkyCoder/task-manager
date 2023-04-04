const tasksRouter = require('express').Router()
const {getAllTasks, createTask, getATask, updateATask, deleteATask} = require("../controllers/tasks.controller.js")

tasksRouter.get("/", getAllTasks)
tasksRouter.post("/", createTask)
tasksRouter.get("/:id", getATask)
tasksRouter.patch("/:id", updateATask)
tasksRouter.delete("/:id", deleteATask)

module.exports = tasksRouter