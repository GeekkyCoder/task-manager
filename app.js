const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const tasksRouter = require("./routes/tasks.routes");

const app = express();

const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL;

app.use("/api/v1/tasks", tasksRouter);

mongoose.connection.on("open", () => {
  console.log("mongoose conncted successfully");
});

// mongoose.connection.on("error", () => {
//     console.log('could not connect to mongo database')
// })

async function startServer() {
  try {
    await mongoose.connect(MONGO_URL);
    app.listen(PORT, () => {
      console.log(`listening to server at port ${PORT}`);
    });
  } catch (err) {
    console.log('could not connect to database');
  }
}

startServer();
