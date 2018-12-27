var express = require('express');
var LoginRepo = require('../repos/LoginRepo');

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
module.exports = router;