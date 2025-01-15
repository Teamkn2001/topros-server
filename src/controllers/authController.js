const authServices = require('../models/authModels');
const hashService = require('../services/hashService');
const jwtService = require('../services/jwtService');
const createError = require('../utils/create-error');

require('dotenv').config()

const authController = {};

authController.register = async (req, res, next) => {
    try {
        const {email, password} = req.body

        const isUserExist = await authServices.findUser(email)

        if(isUserExist){
            return createError(400, "User already exists") 
        }

        const hashPassword = await hashService.hashPassword(password)

        const username = email.split('@')[0]

        const data = {
            username : username,
            email,
            password : hashPassword
        }

        const createUser = await authServices.createUser(data)

        res.json({message : 'user created successfully', data : createUser})
    } catch (error) {
        next(error)
    }
}

authController.login = async (req, res, next) => {
    try {
        const {email, password} = req.body

        if(!email || !password){
            return createError(400, "Email and password is required")
        }

        const isUserExist = await authServices.findUser(email)
        if(!isUserExist){
            return createError(400, "User not found")
        }

        const isPasswordMatch = await hashService.comparePassword(password, isUserExist.password)

        if(!isPasswordMatch){
            return createError(400, "Password is incorrect")
        }

        const payload = {
            id : isUserExist.id,
            email : isUserExist.email
        }

        const accessToken = await jwtService.sign(payload)

        const { password : pw, googleId , ...user } = isUserExist

        res.json({message : 'login successfully', user , token : accessToken})
    } catch (error) {
        next(error)
    }
}

module.exports = authController