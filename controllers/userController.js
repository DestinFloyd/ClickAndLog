Users = require("../models/User")

const userController = {
    index: (req, res) => {
        Users.find({}).then(user=> {
            res.send(user)
        })
    }
    
}



module.exports = userController