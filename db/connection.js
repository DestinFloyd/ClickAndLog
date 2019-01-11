require('dotenv').config()
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MONGODB is now connected")
})

module.exports = mongoose;