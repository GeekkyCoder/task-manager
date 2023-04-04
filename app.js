const express = require("express")
require('dotenv').config()

const tasksRouter = require("./routes/tasks.routes")

const app = express()

const PORT = process.env.PORT

const MONGO_URL=process.env.MONGO_URL

app.use('/api/v1/tasks', tasksRouter)

app.listen(PORT,() => {
    console.log(`listening to server at port ${PORT}`)
})




