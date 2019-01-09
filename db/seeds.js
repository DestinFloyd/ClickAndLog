const User = require('../models/User')
const Board = require('../models/Boards')
const Task = require('../models/Task')

// Task.deleteMany({})
// Board.deleteMany({})

const task1 = new Task({
    name: "Airways",
    details: "presnet in adult small, med, large and ped"
})
const task2 = new Task({
    name: "Oxygen",
    details: "present and level over 500"
})
const task3 = new Task({
    name: "Medication Drawer",
    details: "locked and not expired"
})
const task4 = new Task({
    name: "Defibrillator",
    details: "Checked on 20J and defib pads present"
})
const task5 = new Task({
    name: "Monitors",
    details: "charged and with all 3 cables present"
})
const task6 = new Task({
    name: "Sheets",
    details: "stocked in the cabinets"
})
const task7 = new Task({
    name: "TBDD",
    details: "TBD"
})
const task8 = new Task({
    name: "TBD",
    details: "TBD"
})


const board1 = new Board({
    name: "Crash Cart Checklist",
    task:[task1, task2, task3, task4]
})
const board2 = new Board({
    name: "Moring Checklist",
    task:[task5, task6 ]
})
const board3 = new Board({
    name: "Other Checklist",
    task: [task7, task8]
})

const stephaine = new User({
    name: "Stephaine",
    boards: [board1, board2]
})
const ashley = new User({
    name: "Ashley",
    boards: [board3]
})

console.log(ashley)
User.deleteMany({})
    .then(() => Board.deleteMany({}))
    .then(() => Task.deleteMany({}))
    .then(() => Task.insertMany([task1, task2, task3, task4, task5, task6, task7, task8]))
    .then(() => Board.insertMany([board1, board2, board3]))
    .then(() => stephaine.save())
    .then(() => ashley.save())

console.log("Data Repopulated")

// User.deleteMany({})
//     .then(() => Board.deleteMany({}))
//     .then(() => Task.deleteMany({}))
//     .then(() => {
//         console.log("starting seeds")
//         return User.create({
//             name: "Sarah",
//             boards: []
//         }).then((user) => {
//             const newBoard = Board.create({
//                 name: "Moring Checklist",
//                 tasks: []

//             }).then((boardName) => {
//                 user.boards.push(boardName)
//             })
//             const newBoard2 = Board.create({
//                 name: "Room Checklist",
//                 tasks: []

//             }).then((boardName) => {
//                 user.boards.push(boardName)
//                 console.log("USER BOARD", user.boards[0])
//             }).then(() => {
//                 const newTask = Task.create({
//                     name: "Check off crash carts",
//                     details: "All 10 items",
//                     done: true
//                 }).then((taskName) => {
//                     user.boards[0].tasks.push(taskName)
//                 })
//                 const newTask2 = Task.create({
//                         name: "Check off medication cabinets",
//                         details: "All 50 items",
//                         done: false
//                 }).then((taskName) => {
//                         console.log(user, 'hey')
//                         user.boards[0].tasks.push(taskName)
//                 })
//                     Promise.all([newTask, newTask2], [newBoard, newBoard2])
//                     .then(() => {
//                             user.save()
//                             console.log(newBoard, newTask)
//                     })
//             })
//         })
//     })
