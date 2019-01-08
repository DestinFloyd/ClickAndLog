const User = require('../models/User')
const Board = require('../models/Boards')
const Task = require('../models/Task')

// Task.deleteMany({})
// Board.deleteMany({})

User.deleteMany({})
    .then(() => Board.deleteMany({}))
    .then(() => Task.deleteMany({}))
    .then(() => {
        console.log("starting seeds")
        return User.create({
            name: "Sarah",
            boards: []
        }).then((user) => {
            const newBoard = Board.create({
                name: "Moring Checklist",
                tasks: []

            }).then((boardName) => {
                user.boards.push(boardName)
            })
            const newBoard2 = Board.create({
                name: "Room Checklist",
                tasks: []

            }).then((boardName) => {
                user.boards.push(boardName)
                console.log("USER BOARD", user.boards[0])
            }).then(() => {
                const newTask = Task.create({
                    name: "Check off crash carts",
                    details: "All 10 items",
                    done: true
                }).then((taskName) => {
                    user.boards[0].tasks.push(taskName)
                })
                const newTask2 = Task.create({
                        name: "Check off medication cabinets",
                        details: "All 50 items",
                        done: false
                }).then((taskName) => {
                        console.log(user, 'hey')
                        user.boards[0].tasks.push(taskName)
                })
                    Promise.all([newTask, newTask2], [newBoard, newBoard2])
                    .then(() => {
                            user.save()
                            console.log(newBoard, newTask)
                    })
            })
        })
    })