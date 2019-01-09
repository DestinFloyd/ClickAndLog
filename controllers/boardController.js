const Users = require('../models/User')
const Board = require('../models/Boards')

const boardController = {
    index: (req, res) => {
        const userID = req.params.id
        Users.findById(userID).populate('boards').then(
           (returnedBoards) => {
            const boards = returnedBoards.boards
            res.render('boards/index', { boards:boards, userID:userID })
        })
    },
    new: (req, res) => {
        const userID = req.params.id
        res.render('boards/new', {userID:userID})
    },
    create: (req, res) => {
        console.log("TRYIIIIING TO CREATTTTTE")
        const userID = req.params.id
        Users.findById(userID).populate('boards')
        .then((returnedBoards) => {
            console.log(returnedBoards + "first thennnnnn")
            Board.create(req.body)
            .then((board) => {
                returnedBoards.boards.push(board)
                returnedBoards.save()
                console.log(userID + "USERRRRRRRIDDDDDDDDDDD")
                res.redirect(`/${userID}/board`)
            })
        })
    },
    show: (req, res) => {
        const boardID = req.params.boardId
        const userID = req.params.id
        Board.findById(boardID).then((board) => {
            console.log(board + "returnnnnn boardddddddddd")
            res.render('boards/show', {board:board, userID:userID })
        }).catch((err) => {
            console.log(err)
        })
    },
    edit: (req, res) => {
        console.log("YAY")
        const userID = req.params.id
        const boardID = req.params.boardId
        res.render('boards/edit', {userID, boardID})
    },
    update: (req, res) => {
        const userID = req.params.id
        const boardID = req.params.boardId
        // console.log(boardID)
        Board.findByIdAndUpdate(boardID, req.body, {new: true})
        .then((board) => {
            res.redirect(`/${userID}/board/${boardID}`)
        })
    },
    // delete: (req, res) => {
    //     const userID = req.params.id
    //     const commentId = req.params.commentId
    //     Comment.findByIdAndDelete(commentId)
    //     .then(() => {
    //         res.redirect(`/${newslinkId}/comments`)
    //     })
    // }
}

module.exports = boardController