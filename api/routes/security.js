const express = require('express')
const securityController = require('./../controllers/security')


const router = express.Router()

router.post('/signup', securityController.signUp)
router.post('/login', securityController.login)
router.post('/reset', securityController.reset)

module.exports = router