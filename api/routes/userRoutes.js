const express = require('express');
const router = express.Router();


const userCtrl = require('../controllers/user');

module.exports=function(app){
    app.route('/signup')
        .post(userCtrl.signup);
    app.route('/login')
        .post(userCtrl.login);
}

