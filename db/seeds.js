const User = require('../models/User')
const Board = require('../models/Boards')
const Task = require('../models/Task')
// let newUsers = [
//     {
//       name: 'Stehaine',
//     },
//     {
//       name: 'Ashley',
//     },
//     {
//       name: 'Claire',
//     },
//     {
//       name: 'Phillip',
//     }
//   ]
//   User.deleteMany({}).then(()=> {
//     User.create(newUsers).then(user => {
//       console.log('Saved User-s', user)
//     })
//   })

User.deleteMany({})
    .then(() => {
        console.log("starting seeds")
        return User.create({
            name: "Stephaine",
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
            }).then((taskName) => {
                const newTask = Task.create({
                    name: "Check off crash carts",
                    details: "All 10 items",
                    done: true
                }).then((taskName) => {
                    user.boards[0].tasks.push(taskName)
                }).then((taskName) => {
                    const newTask2 = Task.create({
                        name: "Check off medication cabinets",
                        details: "All 50 items",
                        done: false
                    }).then((taskName) => {
                        user.boards[1].tasks.push(taskName)
                    })


                    Promise.all([newBoard, newBoard2], [newTask, newTask2])
                        .then(() => {
                            user.save()
                            console.log("promise done")
                        })
                })
            })
        })
    })