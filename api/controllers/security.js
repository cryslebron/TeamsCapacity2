const { User } = require('./../models/models')
const passService = require('./../service/password-service')

exports.signUp = async (req, res) => {
    try {        
        const hashed = await passService.hash(req.body.password)
        await User.create({
            username: req.body.username,
            password: hashed
        })
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
}
exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ where: { username: req.body.username } })
        if(user !== null  && await passService.compare(req.body.password, user.password)) {
            res.sendStatus(200)
        } else {
           res.sendStatus(401) 
        }
    } catch (error) {
        res.sendStatus(500)
    }
}

exports.reset = (req, res) => {
    res.sendStatus(200)
}