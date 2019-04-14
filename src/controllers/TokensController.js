const Token = require('../models/Tokens')

class TokensController {
    async store(req, res) {
        const token = await Token.create(req.body)
        return res.json(token)
    }
}

// new => return instances of class
module.exports = new TokensController()