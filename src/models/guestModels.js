const prisma = require('../configs/prisma')

const guestModels = {}

guestModels.getRandomItems = async () => {
    return await prisma.item.findMany({
        take: 9,
        orderBy: {
            id: 'desc'
        }
    })
}

module.exports = guestModels