const express = require('express')
const userController = require('./../controllers/user')

const router = express.Router()

router.get('/', userController.get)
router.get('/:username', userController.getOne)
router.post('/team/add', userController.addTeam)

module.exports = router