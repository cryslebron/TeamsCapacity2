const express = require('express')

const router = express.Router()

router.get('/', (req, res) => { res.json([{name: 'team 1'}]) })
router.post('/', (req, res) => { res.sendStatus(200) })
router.put('/:id', (req, res) => { res.sendStatus(200) })

module.exports = router