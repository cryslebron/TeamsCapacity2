const { Team } = require('./../models/models')

exports.get = async (req, res) => {
    try {
        const teams = await Team.findAll();
        res.json(teams)
    } catch (error) {
        res.sendStatus(500)
    }
}

exports.getOne = async (req, res) => {
    try {
        const team = await Team.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(team)
    } catch (error) {
        res.sendStatus(500)
    }
}

exports.post = async (req, res) => {
    try {
        const team = await Team.create({
            name: req.body.name
        })
        res.json(team)
    } catch (error) {
        res.sendStatus(500)
    }
}

exports.delete = async (req, res) => {
    try {
        await Team.destroy({
            where: {
                name: req.params.name
            }
        })
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
}