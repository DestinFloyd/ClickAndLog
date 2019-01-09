const express = require('express')
const router = express.Router()
const userController = require("../controllers/userController")
const boardController = require('../controllers/boardController')
const taskController = require('../controllers/taskController')

router.get('/', userController.index)
router.post('/', userController.create)
router.get('/new', userController.new)
router.get('/:id', userController.show)
router.get('/:id/edit', userController.edit)
router.patch('/:id', userController.update)
router.delete('/:id', userController.delete)

router.get('/:id/board', boardController.index)
router.get('/:id/board/new', boardController.new)
router.post('/:id/board', boardController.create)
router.get('/:id/board/:boardId', boardController.show)
router.get('/:id/board/:boardId/edit', boardController.edit)
router.patch('/:id/board/:boardId', boardController.update)
router.delete('/:id/board/:boardId', boardController.delete)



module.exports = router