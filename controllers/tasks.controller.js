function getAllTasks(req,res){
    res.send("all items")
}

function createTask(req,res){
    res.send("create a task")
}

function getATask(req,res){
    res.send("get a single task")
}

function updateATask(req,res){
    res.send("update a task")
}

function deleteATask(req,res){
    res.send("delete a task")
}

module.exports = {
    getAllTasks,
    createTask,
    getATask,
    updateATask,
    deleteATask
}