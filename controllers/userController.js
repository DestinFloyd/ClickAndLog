Users = require("../models/User")
// Board = require("../models/Boards")
Task = require("../models/Task")

const userController = {
    index: (req, res) => {
        Users.find({}).populate("boards").then(user=> {
            res.send(user)
        })
    }
    
}



module.exports = userController