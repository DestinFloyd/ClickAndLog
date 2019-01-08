const Users = require('../models/User')
const Board = require('../models/Boards')
const Task = require('../models/Task')
let newUsers = [
    {
      name: 'Stehaine',
    },
    {
      name: 'Ashley',
    },
    {
      name: 'Claire',
    },
    {
      name: 'Phillip',
    }
  ]
  Users.deleteMany({}).then(()=> {
    Users.create(newUsers).then(user => {
      console.log('Saved Users', user)
    })
  })
  
  // User.deleteMany({})
  // .then(() => {
  //     return User.create({
  //         name: "Stephaine",
  //         boards: []
  //     }).then((user) => {
  //         const newBoard = Board.create({
  //             name: "Moring Checklist"
  //         }).then((boardName) => {
  //             user.boards.push(boardName)
  //         })
  //         const newBoard2 = Board.create({
  //             name: "Room Checklist"
  //         }).then((boardName) => {
  //             user.boards.push(boardName)
  //         })

  //         Promise.all([newBoard, newBoard2])
  //         .then(()=>{
  //             user.save()
  //         })
  //     })
  // })