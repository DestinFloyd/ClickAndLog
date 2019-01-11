const Log = require('../models/Log')

const logController = {
    index: (req, res) => {
        Log.find({}).then(logs => {
            res.render("logs/index", { logs })
        })

    },
    create: (req, res) => {
        Log.create(req.body).then((newLog) => {
            newLog.save()
            res.redirect(`/`)
        })
    }
}

module.exports = logController