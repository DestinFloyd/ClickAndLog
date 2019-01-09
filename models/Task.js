
const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Task = new Schema({
    name: String,
    details: String
});

module.exports = mongoose.model("Task", Task)