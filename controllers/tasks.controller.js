const Task = require("../modal/tasks.modal");

async function getAllTasks(req, res) {
    res.send("all the tasks")
}

async function createTask(req, res) {
  try {
    const task = await Task.create(req.body);
   return res.status(201).json(task);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err)
  }
}

function getATask(req, res) {
  res.send("get a single task");
}

function updateATask(req, res) {
  res.send("update a task");
}

function deleteATask(req, res) {
  res.send("delete a task");
}

module.exports = {
  getAllTasks,
  createTask,
  getATask,
  updateATask,
  deleteATask,
};
