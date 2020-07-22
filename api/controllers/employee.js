const { Employee } = require('./../models/models')

exports.get = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.json(employees)
    } catch (error) {
        res.sendStatus(500)
    }
}
exports.getOne = async (req, res) => {
    try {
        const employee = await Employee.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(employee)
    } catch (error) {
        res.sendStatus(500)
    }
}

exports.getByTeam = async (req, res) => {
    try {
        const employees = await Employee.findAll({
            where: {
                teamId: req.params.id
            }
        });
        res.json(employees)
    } catch (error) {
        res.sendStatus(500)
    }
}

exports.post = async (req, res) => {
    try {
        await Employee.create({
            name: req.body.name,
            title: req.body.title,
            time: req.body.time,
            teamId: req.body.teamId
        })
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
}

exports.delete = async (req, res) => {
    try {
        await Employee.destroy({
            where: {
                name: req.params.name
            }
        })
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
}