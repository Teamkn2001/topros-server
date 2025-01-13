const userModels = require("../models/userModels")
const jwtService = require("../services/jwtService")
const createError = require("../utils/create-error")

const authenticate = async (req, res, next) => {
 
    try {
        const authorization = req.headers.authorization

        if (!authorization) {
            return createError(401, 'Unauthorized: No token provided !!')
        }

        const token = authorization.split(' ')[1]
        if(!token){
            return createError(401, 'Unauthorized')
        }

        const jwtPayload = await jwtService.verify(token)
        // console.log('jwtPayload ===',jwtPayload)

        if(!jwtPayload){
            return createError(401, 'Unauthorized: Invalid token !!')
        }

        const user = await userModels.findUserById(jwtPayload.id)
        if(!user){
            return createError(401, 'Unauthorized: User not found !!')
        }

        const {password, googleId, profileImage, bio, ...userData} = user

        req.user = userData
        next()
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = authenticate