const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String
})

module.exports = User = mongoose.model('user', userSchema);