const { User, Team } = require('./../models/models')

exports.get = async (req, res) => {
    try {        
        const users = await User.findAll();
        res.json(users)
    } catch (error) {
        res.sendStatus(500)
    }
}

exports.getOne = async (req, res) => {
    try {        
        const user = await User.findOne({
            where: {
                username: req.params.username
            },
            include: Team
        });
        res.json(user)
    } catch (error) {
        res.sendStatus(500)
    }
}

exports.addTeam = async (req, res) => {
    try {        
        const user = await User.findOne({
            where: {
                username: req.body.username
            }
        });
        const team = await Team.findOne({
            where: {
                name: req.body.teamName
            }
        });
        user.addTeam(team)
        await user.save();

        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
}