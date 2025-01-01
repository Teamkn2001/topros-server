require('dotenv').config()

const prisma = require('.././src/configs/prisma')

async function run() {
    try {
        await prisma.$executeRawUnsafe('DROP DATABASE toprosdb');
        await prisma.$executeRawUnsafe('CREATE DATABASE toprosdb');
    } catch (err) {
        console.log('error in reset DB', err);
    }
}
console.log('Reset DB..');
run();