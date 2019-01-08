const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    boards: [{
        type: Schema.Types.ObjectId,
        ref: "Board"
    }]

});

module.exports = mongoose.model("User", User)