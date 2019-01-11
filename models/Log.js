const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Log = new Schema({
    completedBy: String, 
    date: String,
    name: String,
    notes: String
});

module.exports = mongoose.model("Log", Log)