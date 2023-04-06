const Task = require("../modal/tasks.modal");

async function getAllTasks(req, res) {
  try {
    const tasks = await Task.find({});
    return res.status(200).json({ tasks });
  } catch (err) {
    return res.status(500).json(err);
  }
}

async function createTask(req, res) {
  try {
    const task = await Task.create(req.body);
    return res.status(201).json(task);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
}

async function getATask(req, res) {
  const taskId = req.params.id;
  try {
    const task = await Task.findOne({ _id: taskId });
    if (!task) return res.status(404).json({ msg: "task does not exist" });
    return res.status(200).json({ task });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
}

async function updateATask(req, res) {
  const taskId = req.params.id;
  const payload = req.body;
  try {
    await Task.findOneAndUpdate({ _id: taskId }, payload, {
      runValidators: true,
    });
    const task = await Task.findOne({ _id: taskId });
    return res.status(201).json({ task });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
}

async function deleteATask(req, res) {
  const taskId = req.params.id;
  try {
    const deletedTask = await Task.findOneAndDelete({ _id: taskId });
    return res.status(200).json(deletedTask);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getATask,
  updateATask,
  deleteATask,
};
