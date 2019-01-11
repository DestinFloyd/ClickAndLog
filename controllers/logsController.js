const Log = require('../models/Log')

const logController = {
    index: (req, res) => {
    Log.find({}).then(logs=>{

    res.render("logs/index", {logs})
 })

    },
    // new: (req, res) => {
    //     const userID = req.params.id
    //     const boardID = req.params.boardId
    //     res.render('task/new', { userID: userID, boardID: boardID })
    // },
    create: (req, res) => {
            // const userID = req.params.id
            // const boardID = req.params.boardId
            Log.create(req.body).then((newLog) => {
            //     returnedTask.tasks.push(newLog)
                newLog.save()
                res.redirect(`/`)
            })

    }
 

}

module.exports = logController