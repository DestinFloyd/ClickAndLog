const Users = require('../models/User')

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
  
  
  // Donut.deleteMany({}).then(()=> {
  //   Donut.create(newDonuts).then(donuts => {
  //     console.log('Saved Donuts', donuts)
  //   })
  // })
  
  Users.create(newUsers).then(user => {
    console.log('Saved Users', user)
  })