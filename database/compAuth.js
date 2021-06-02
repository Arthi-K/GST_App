const mongoose = require('mongoose');

const compAuthSchema = new mongoose.Schema({
    appName: String,
    tradeName: String,
    email: String,
    phone: Number,
    username: String,
    password: String
});

const compAuthModel = mongoose.model('CompAuth', compAuthSchema);


module.exports = compAuthModel;