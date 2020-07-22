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
            teamName: req.body.teamName
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
                teamName: req.params.teamName
            }
        })
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
}