const User = require('../models/User')
const Board = require('../models/Boards')
const Task = require('../models/Task')
const Log = require('../models/Log')

const task1 = new Task({
    name: "Airways",
    details: "Present in adult small, medium, large, and pediatric"
})
const task2 = new Task({
    name: "Oxygen",
    details: "Present and level over 500"
})
const task3 = new Task({
    name: "Medication Drawer",
    details: "Locked and not expired"
})
const task4 = new Task({
    name: "Defibrillator",
    details: "Checked on 20J and defib. pads present"
})
const task5 = new Task({
    name: "Monitors",
    details: "Charged and with all 3 cables present"
})
const task6 = new Task({
    name: "Sheets",
    details: "Stocked in the cabinets"
})
const task7 = new Task({
    name: "Backboard",
    details: "Present and 3 straps"
})
const task8 = new Task({
    name: "Bag",
    details: "Gear bag present and sealed"
})
const task9 = new Task({
    name: "Linen",
    details: "2 sheets and 1 blanket"
})

const board1 = new Board({
    name: "Crash Cart Checklist",
    tasks: [task1, task2, task3, task4]
})
const board2 = new Board({
    name: "Moring Checklist",
    tasks: [task5, task6]
})
const board3 = new Board({
    name: "Stretcher Checklist",
    tasks: [task7, task8, task9]
})

const stephaine = new User({
    name: "Stephaine",
    boards: [board1, board2]
})
const ashley = new User({
    name: "Ashley",
    boards: [board3]
})

const log1 = new Log({
    completedBy: "Ashley",
    date: "01/12/2019",
    name: "Other Checklist",
    
})
const log2 = new Log({
    completedBy: "Stephaine",
    date: "01/10/2019",
    name: "Crash Cart Checklist",
    notes: "Meds will expire soon"
})
const log3 = new Log({
    completedBy: "Stephaine",
    date: "01/09/2019",
    name: "Morning Checklist",
    notes: ""
})

User.remove({})
    .then(() => Log.remove({}))
    .then(() => Board.remove({}))
    .then(() => Task.remove({}))
    .then(() => Task.insertMany([task1, task2, task3, task4, task5, task6, task7, task8, task9]))
    .then(() => Board.insertMany([board1, board2, board3]))
    .then(() => stephaine.save())
    .then(() => ashley.save())
    .then(() => log1.save())
    .then(() => log2.save())
    .then(() => log3.save())

console.log("Data Repopulated")

