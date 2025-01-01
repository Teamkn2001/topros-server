const express = require('express')
const authController = require('../controllers/authController')
const { registerValidator } = require('../middlewares/validator')

const authRouter = express.Router()

authRouter.post('/register', registerValidator , authController.register)
authRouter.post('/login', authController.login)

module.exports = authRouter