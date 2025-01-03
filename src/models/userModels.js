const prisma = require('../configs/prisma')

const userModels = {}

userModels.editProfile = async (userId, data) => {
    return await prisma.user.update({
        where : {
            id : userId
        },
        data : data
    })
}

userModels.getItems = async (userId) => {
    return await prisma.item.findMany({
        where : {
            ownerId : userId
        }
    })
}

userModels.findUserById = async (userId) => {
    return await prisma.user.findUnique({
        where : {
            id : userId
        }
    })
}

userModels.findUserPasswordById = async (userId) => {
    return await prisma.user.findUnique({
        where : {
            id : userId
        },
        select : {
            password : true
        }
    })
}

userModels.resetPassword = async (userId, newPassword) => {
    return await prisma.user.update({
        where : {
            id : userId
        },
        data : {
            password : newPassword
        }
    })
}

userModels.createItem = async (data) => {
    return await prisma.item.create({
        data : data
    })
}

userModels.editItem = async (itemId, data) => {
    return await prisma.item.update({
        where : {
            id : itemId
        },
        data : data
    })
}

userModels.deleteItem = async (itemId) => {
    return await prisma.item.delete({
        where : {
            id : itemId
        }
    })
}

module.exports = userModels