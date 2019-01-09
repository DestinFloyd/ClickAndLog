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
        const boardID = req.params.boardID
        const userID = req.params.id
        Board.findById(boardID).then((board) => {
            res.render('boards/show', {board:board, userID:userID })
        }).catch((err) => {
            console.log(err)
        })
    },
    // edit: (req, res) => {
    //     const userID = req.params.id
    //     const commentId = req.params.commentId
    //     res.render('board/edit', {newslinkId, commentId})
    // },
    // update: (req, res) => {
    //     const userID = req.params.id
    //     const commentId = req.params.commentId
    //     console.log(commentId)
    //     Comment.findByIdAndUpdate(commentId, req.body, {new: true})
    //     .then((comment) => {
    //         res.redirect(`/${newslinkId}/comments/${commentId}`)
    //     })
    // },
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