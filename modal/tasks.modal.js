const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
  name: {
    type: String,
    required:[true,'must provide name'],
    maxlength:20,
    trim:[true,'name can only be 20 characters long']
  },
  completed:{
    type:Boolean,
    default:false
  }
});

module.exports = mongoose.model("Task", tasksSchema);
