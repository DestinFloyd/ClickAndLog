// require('dotenv').config()
const mongoose = require("mongoose")

// mongoose.connect(process.env.MONGODB_URI).then(() => {
mongoose.connect("mongodb://localhost/users").then(() => {
    console.log("MONGODB is now connected")
})

module.exports = mongoose;