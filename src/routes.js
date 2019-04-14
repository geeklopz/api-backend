const express = require('express')

const routes = express.Router()

const TokensController = require('./controllers/TokensController')

// Routes
// GET/POST/PUT/DELETE

routes.post('/token', TokensController.store)

module.exports = routes