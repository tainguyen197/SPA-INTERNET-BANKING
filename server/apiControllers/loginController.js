var express = require('express');
var LoginRepo = require('../repos/LoginRepo');
const jwt = require('jsonwebtoken');

var router = express.Router();

router.get('/',(req,res) =>{
    var username = req.query.username;
    var password = req.query.password;

    LoginRepo.Login(username,password)
    .then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
    })
})

router.get('/staff-login',(req,res) =>{
    var username = req.query.username;
    var password = req.query.password;

    LoginRepo.StaffLogin(username,password)
    .then(rows => {
        var thisUser = {
            UserName: username,
            Password: password
        }
        const token = jwt.sign({thisUser}, '123456key');
        rows.push(token);
        console.log(rows);
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
    })
})
module.exports = router;