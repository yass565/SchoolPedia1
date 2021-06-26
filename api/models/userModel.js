const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema=mongoose.Schema;

const userSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tel: {type: String, required: true},
    niveau: {type: String, required: true},
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Users', userSchema);
