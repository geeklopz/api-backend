const mongoose = require('mongoose')

const Token = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    expired: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Token", Token)