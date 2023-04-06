const express = require("express");
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");

const tasksRouter = require("./routes/tasks.routes");
const notFound = require("./middlewares/not-found");
const customErrorHandler = require("./middlewares/custom-error-handler");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL;

app.use("/api/v1/tasks", tasksRouter);

app.use(notFound)

app.use(customErrorHandler)

mongoose.connection.on("open", () => {
  console.log(" mongodb conncted successfully");
});

mongoose.connection.on("error", () => {
  console.log("could not connect to mongo database");
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  app.listen(PORT, () => {
    console.log(`listening to server at port ${PORT}`);
  });
}

startServer();
