const express = require('express')
const router = express.Router()
const gots = require('../controllers/gotControllers')

router.get('/', gots.index)

module.exports = router