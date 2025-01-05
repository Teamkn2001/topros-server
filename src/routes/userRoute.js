const express = require('express')
const { user } = require('../configs/prisma')
const userController = require('../controllers/userController')
const { createCommentValidation } = require('../middlewares/validator')

const userRouter = express.Router()

userRouter.patch('/editProfile', userController.editProfile)
userRouter.post('/verifyPassword', userController.verifyOldPassword)
userRouter.patch('/resetPassword', userController.resetPassword)

userRouter.get('/getItems', userController.getItem)
userRouter.post('/createItem', userController.createItem)
userRouter.patch('/editItem/:itemId', userController.editItem)
userRouter.delete('/deleteItem/:itemId', userController.deleteItem)

// add comment
userRouter.post('/createComment/:itemId', createCommentValidation,  userController.createComment)
userRouter.patch('/editComment/:commentId', userController.editComment)
userRouter.delete('/deleteComment/:commentId', userController.deleteComment)

// userRouter.post('/createLike/:itemId', userController.createLike)
userRouter.post('/likes/toggle/:itemId', userController.toggleLike)

module.exports = userRouter