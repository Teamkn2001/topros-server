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
    } catch (error) {
        console.log(error)
    }
}

run()