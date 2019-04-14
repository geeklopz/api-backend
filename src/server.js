const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())

mongoose.connect('mongodb://shoqolatt-machine:shoqolatt2019@ds111025.mlab.com:11025/shoqolatt-machine', {
    useNewUrlParser: true
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))

app.listen(3333)