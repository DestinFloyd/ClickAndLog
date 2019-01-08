const Users = require('../models/User')
const Board = require('../models/Boards')

const boardController = {
    index: (req, res) => {
        const userID = req.params.id
        console.log(userID)
        Users.findById(userID).populate('boards').then(
            (bbs)=> {res.send(bbs)
            // (returnedBoards) => {
            // const board = returnedBoards.boards
            // console.log(returnedBoards)
            // res.render('boards/index', { board, userID })
        })
    }
    // ,
    // new: (req, res) => {
    //     const newslinkId = req.params.id
    //     res.render('comments/new', {newslinkId: newslinkId})
    // },
    // create: (req, res) => {
    //     const newslinkId = req.params.id
    //     NewsLink.findById(newslinkId)
    //     .then((newslink) => {
    //         Comment.create(req.body)
    //         .then((comment) => {
    //             newslink.comments.push(comment)
    //             newslink.save()
    //             res.redirect(`/${newslink._id}/comments`)
    //         })
    //     })
    // },
    // show: (req, res) => {
    //     const commentId = req.params.commentId
    //     const newsLinkId = req.params.id
    //     Comment.findById(commentId).then((comment) => {
    //         res.render('comments/show', { comment: comment, newsLinkId: newsLinkId })
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // },
    // edit: (req, res) => {
    //     const newslinkId = req.params.id
    //     const commentId = req.params.commentId
    //     res.render('comments/edit', {newslinkId, commentId})
    // },
    // update: (req, res) => {
    //     const newslinkId = req.params.id
    //     const commentId = req.params.commentId
    //     console.log(commentId)
    //     Comment.findByIdAndUpdate(commentId, req.body, {new: true})
    //     .then((comment) => {
    //         res.redirect(`/${newslinkId}/comments/${commentId}`)
    //     })
    // },
    // delete: (req, res) => {
    //     const newslinkId = req.params.id
    //     const commentId = req.params.commentId
    //     Comment.findByIdAndDelete(commentId)
    //     .then(() => {
    //         res.redirect(`/${newslinkId}/comments`)
    //     })
    // }
}

module.exports = boardController