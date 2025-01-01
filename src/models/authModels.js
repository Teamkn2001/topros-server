const prisma = require('../configs/prisma');

const authServices = {};

authServices.findUser = async (email) => {
    return await prisma.user.findUnique({
        where: {
            email: email
        }
    })
}

authServices.createUser = async (data) => {
    return await prisma.user.create({
        data: data
    })
}

module.exports = authServices;