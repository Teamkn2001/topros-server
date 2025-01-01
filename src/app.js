const express = require('express')
const cors = require('cors')
const notFoundHandler = require('./middlewares/not-found')
const handleError = require('./middlewares/error')
const authRouter = require('./routes/authRoute')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/auth', authRouter)


app.use('*', notFoundHandler)
app.use(handleError)

module.exports = app


