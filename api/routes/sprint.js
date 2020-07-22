const express = require('express')
const sprintController = require('./../controllers/sprint')

const router = express.Router()

router.get('/', sprintController.get)
router.get('/:sprintName', sprintController.getOne)
router.post('/', sprintController.post)
router.post('/employee/add', sprintController.addEmployee)
router.delete('/:sprintName', sprintController.delete)

module.exports = router