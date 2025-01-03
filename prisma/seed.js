const prisma = require("../src/configs/prisma");
const hashService = require("../src/services/hashService");

async function run() {
    try {

        const password = '123456'

        const hashedPassword = await hashService.hashPassword(password)

        const createUser = await prisma.user.createMany({
            data: [
                { email: 'team@gmail.com', username: 'team', password: hashedPassword },
                { email: 'John@gmail.com', username: 'John', password: hashedPassword },
                { email: 'Timmy@gmail.com', username: 'Timmy', password: hashedPassword },
            ]
        })

        const createItem = await prisma.item.createMany({
            data: [
                { ownerId: 1, artImg: 'https://res.cloudinary.com/djudr1vzc/image/upload/v1732351017/2_1732351012360_522.jpg', artName: 'sunflower No 1', category: "Indie_Art" },
                { ownerId: 1, artImg: 'https://res.cloudinary.com/djudr1vzc/image/upload/v1732351017/2_1732351012360_522.jpg', artName: 'sunflower No 2', category: "Indie_Art" },
                { ownerId: 1, artImg: 'https://res.cloudinary.com/djudr1vzc/image/upload/v1732351017/2_1732351012360_522.jpg', artName: 'sunflower No 3', category: "Indie_Art" },
                { ownerId: 2, artImg: 'https://res.cloudinary.com/djudr1vzc/image/upload/v1732351017/2_1732351012360_522.jpg', artName: 'sunflower No 3', category: "Indie_Art" },
                { ownerId: 2, artImg: 'https://res.cloudinary.com/djudr1vzc/image/upload/v1732351017/2_1732351012360_522.jpg', artName: 'sunflower No 3', category: "Indie_Art" },
                { ownerId: 2, artImg: 'https://res.cloudinary.com/djudr1vzc/image/upload/v1732351017/2_1732351012360_522.jpg', artName: 'sunflower No 3', category: "Indie_Art" },
            ]
        })
    } catch (error) {
        console.log(error)
    }
}

run()