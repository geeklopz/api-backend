const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())

mongoose.connect('mongodb://db-address', {
    useNewUrlParser: true
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))

app.listen(3333)