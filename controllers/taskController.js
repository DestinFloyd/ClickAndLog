const Users = require('../models/User')
const Board = require('../models/Boards')
const Task = require("../models/Task")

const taskController = {
    index: (req, res) => {
        console.log("HI")
        // const userID = req.params.id
        // const boardID = req.params.boardId
       
        //     Users.findById(userID).populate('boards').then(
        //     (returnedBoards) => {
               
        //     const boards = returnedBoards.boards
        //     res.render('boards/index', { boards:boards, userID:userID })
        // })
    },
    new: (req, res) => {
        const userID = req.params.id
        const boardID = req.params.boardId
        res.render('task/new', {userID:userID, boardID:boardID})
    },
    create: (req, res) => {
        const userID = req.params.id
        const boardID = req.params.boardId
        Board.findById(boardID).populate('tasks').then((returnedTask)=>{
            Task.create(req.body).then((newTask)=>{
                returnedTask.tasks.push(newTask)
                returnedTask.save()
                res.redirect(`/${userID}/board/${boardID}`)
            })
            
        }) 

    },
    // show: (req, res) => {
    //     const boardID = req.params.boardId
    //     const userID = req.params.id
    //     Board.findById(boardID).populate('tasks').then((board) => {
    //         const tasks = board.tasks
    //         res.render('boards/show', {board:board, tasks:tasks, userID:userID })
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // },
    // edit: (req, res) => {
        
    //     const userID = req.params.id
    //     const boardID = req.params.boardId
    //     res.render('boards/edit', {userID, boardID})
    // },
    // update: (req, res) => {
    //     const userID = req.params.id
    //     const boardID = req.params.boardId
    //     // console.log(boardID)
    //     Board.findByIdAndUpdate(boardID, req.body, {new: true})
    //     .then((board) => {
    //         res.redirect(`/${userID}/board/${boardID}`)
    //     })
    // },
    // delete: (req, res) => {
    //     const userID = req.params.id
    //     const boardId = req.params.boardId
    //     Board.findByIdAndDelete(boardId)
    //     .then(() => {
    //         res.redirect(`/${userID}/board`)
    //     })
    // }
}

module.exports = taskController