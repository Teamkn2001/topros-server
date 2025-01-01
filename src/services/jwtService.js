require('dotenv').config()
const jwt = require('jsonwebtoken')

const jwtService = {}

jwtService.sign = async (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '3d' })
}

jwtService.verify = async (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = jwtService