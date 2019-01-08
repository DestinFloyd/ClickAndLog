Users = require("../models/User")

const userController = {
    index: (req, res) => {
        Users.find({}).populate('boards').then((user)=> {
            console.log(user)
            res.render("users/index", {user:user})
        })
    },
    new: (req, res) =>{
        res.render("users/new")
    },
    create: (req, res) =>{
        Users.create({
            name: req.body.name,
        }).then(newLink => {
            res.redirect('/')
        })
    },
    show: (req, res) =>{
        const userID = req.params.id
        Users.findById(userID).populate('boards').then((user)=>{
            
            res.render("users/show", { user})
        })
    }, 
    edit: (req, res) =>{
        const userID = req.params.id
        Users.findById(userID).then((user)=>{
        res.render("users/edit", {userID, user})
        })
    },
    update: (req, res)=>{
        const userID = req.params.id
        console.log(req.body)
        Users.findByIdAndUpdate(userID, req.body, {new: true}).then(() => {
            res.redirect(`/${userID}`)
        })
    },
    delete: (req, res)=>{
        const userID = req.params.id
        Users.findByIdAndRemove(userID).then(() => {
            res.redirect('/')
        })
    },
}


module.exports = userController