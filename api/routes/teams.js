const express = require('express')
const teamsController = require('./../controllers/team')

const router = express.Router()

router.get('/', teamsController.get)
router.get('/:id', teamsController.getOne)
router.post('/', teamsController.post)
router.delete('/:name', teamsController.delete)

module.exports = router