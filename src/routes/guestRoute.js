const express = require('express')
const guestController = require('../controllers/guestController')

const guestRouter = express.Router()

guestRouter.get('/getRandomItems', guestController.getRandomItems)
guestRouter.get('/getItemById/:itemId', guestController.getItemById)
guestRouter.get('/getPopularUsers', guestController.getPopularUsers)
guestRouter.get('/getPopularItems', guestController.getPopularItems)

guestRouter.get('/searchItems/items', guestController.searchItemsByName)
guestRouter.get('/searchUsers/users', guestController.searchUsersByName)
module.exports = guestRouter