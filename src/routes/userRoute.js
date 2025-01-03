const express = require('express')
const { user } = require('../configs/prisma')
const userController = require('../controllers/userController')

const userRouter = express.Router()

userRouter.patch('/editProfile', userController.editProfile)
userRouter.post('/verifyPassword', userController.verifyOldPassword)
userRouter.patch('/resetPassword', userController.resetPassword)

userRouter.get('/getItems', userController.getItem)
userRouter.post('/createItem', userController.createItem)
userRouter.patch('/editItem/:itemId', userController.editItem)
userRouter.delete('/deleteItem/:itemId', userController.deleteItem)

module.exports = userRouter