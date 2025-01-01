const express = require('express')
const cors = require('cors')
const notFoundHandler = require('./middlewares/not-found')
const handleError = require('./middlewares/error')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/auth', (req,res,) => { res.send('auth route naja')})


app.use('*', notFoundHandler)
app.use(handleError)

module.exports = app


