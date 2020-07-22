const express = require('express')
const employeeController = require('./../controllers/employee')

const router = express.Router()

router.get('/', employeeController.get)
router.get('/:id', employeeController.getOne)
router.get('/by-team/:id', employeeController.get)
router.post('/', employeeController.post)
router.delete('/:name', employeeController.delete)

module.exports = router