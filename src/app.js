const express = require('express')
const cors = require('cors')
const notFoundHandler = require('./middlewares/not-found')
const handleError = require('./middlewares/error')
const authRouter = require('./routes/authRoute')
const userRouter = require('./routes/userRoute')
const authenticate = require('./middlewares/authenticate')
const guestRouter = require('./routes/guestRoute')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', guestRouter)
app.use('/auth', authRouter)
app.use('/user', authenticate, userRouter)

app.use('*', notFoundHandler)
app.use(handleError)

module.exports = app

