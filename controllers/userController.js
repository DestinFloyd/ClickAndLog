Users = require("../models/User")
Board = require("../models/Boards")
// Task = require("../models/Task")

const userController = {
    index: (req, res) => {
        Users.find({}).then((user)=> {
            
            res.send(user)
        })
    }
    
}
// index: (req, res) => {
//     const newslinkId = req.params.id
//     console.log(newslinkId)
//     NewsLink.findById(newslinkId).populate('comments').then((newslink) => {
//         const comments = newslink.comments
//         res.render('comments/index', { comments, newslinkId })
//     })


module.exports = userController