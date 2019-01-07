const express = require('express')
const router = express.Router()
const userController = require("../controllers/userController")
// const commentController = require('../controllers/commentController')

router.get('/', userController.index)

module.exports = router