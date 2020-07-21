const { Sprint, Employee } = require('./../models/models')

exports.get = async (req, res) => {
    try {
        const sprints = await Sprint.findAll();
        res.json(sprints)
    } catch (error) {
        res.sendStatus(500)
    }
}

exports.getOne = async (req, res) => {
    try {
        const sprint = await Sprint.findOne({
            where: {
                sprintNumber: req.params.sprintNumber
            },
            include: Employee
        });
        res.json(sprint)
    } catch (error) {
        res.sendStatus(500)
    }
}

exports.post = async (req, res) => {
    try {
        const sprint = await Sprint.create({
            sprintNumber: req.body.sprintNumber,
            startDate: req.body.startDate,
            endDate: req.body.endDate
        })
        res.json(sprint)
    } catch (error) {
        res.sendStatus(500)
    }
}

exports.addEmployee = async (req, res) => {
    try {
        const sprint = await Sprint.findOne({
            where: {
                sprintNumber: req.body.sprintNumber
            }
        });
        const employee = await Employee.findOne({
            where: {
                id: req.body.employeeId
            }
        });
        sprint.addEmployee(employee)
        await sprint.save();

        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
}

exports.delete = async (req, res) => {
    try {
        await Sprint.destroy({
            where: {
                sprintNumber: req.params.sprintNumber
            }
        })
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
}