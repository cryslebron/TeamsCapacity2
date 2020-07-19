const express = require('express')

const router = express.Router()

router.post('/login', (req, res) => {
    res.sendStatus(200)
})

router.post('/signin', (req, res) => {
    res.sendStatus(200)
})

router.post('/reset', (req, res) => {
    res.sendStatus(500)
})

module.exports = router;