const Users = require('../models/User')
const Board = require('../models/Boards')
const Task = require("../models/Task")

const taskController = {
    index: (req, res) => {
    },
    new: (req, res) => {
        const userID = req.params.id
        const boardID = req.params.boardId
        res.render('task/new', { userID: userID, boardID: boardID })
    },
    create: (req, res) => {
        const userID = req.params.id
        const boardID = req.params.boardId
        Board.findById(boardID).populate('tasks').then((returnedTask) => {
            Task.create(req.body).then((newTask) => {
                returnedTask.tasks.push(newTask)
                returnedTask.save()
                res.redirect(`/${userID}/board/${boardID}`)
            })
        })

    },
    show: (req, res) => {
        const boardID = req.params.boardId
        const userID = req.params.id
        const taskID = req.params.taskId
        res.render('task/show')
    },

    delete: (req, res) => {
        const userID = req.params.id
        const boardID = req.params.boardId
        const taskID = req.params.taskId
        Task.findByIdAndDelete(taskID)
            .then(() => {
                res.redirect(`/${userID}/board/${boardID}`)
            })
    }
}

module.exports = taskController