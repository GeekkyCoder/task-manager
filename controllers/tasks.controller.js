const Task = require("../modal/tasks.modal");
const asyncWrapper = require("../middlewares/asyn-wrapper")

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  return res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  return res.status(201).json(task);
});

const getATask = asyncWrapper(async (req, res) => {
  const taskId = req.params.id;
  const task = await Task.findOne({ _id: taskId });
  if (!task) return res.status(404).json({ msg: "task does not exist" });
  return res.status(200).json({ task });
});

const updateATask = asyncWrapper(async (req, res) => {
  const taskId = req.params.id;
  const payload = req.body;
  await Task.findOneAndUpdate({ _id: taskId }, payload, {
    runValidators: true,
  });
  const task = await Task.findOne({ _id: taskId });
  return res.status(201).json({ task });
});

const deleteATask = asyncWrapper(async (req, res) => {
  const taskId = req.params.id;
  const deletedTask = await Task.findOneAndDelete({ _id: taskId });
  return res.status(200).json(deletedTask);
});

module.exports = {
  getAllTasks,
  createTask,
  getATask,
  updateATask,
  deleteATask,
};
