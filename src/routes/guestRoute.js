const express = require('express')
const guestController = require('../controllers/guestController')

const guestRouter = express.Router()

guestRouter.get('/getRandomItems', guestController.getRandomItems)

module.exports = guestRouter