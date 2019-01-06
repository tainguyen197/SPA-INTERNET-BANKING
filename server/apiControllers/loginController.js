var express = require('express');
var LoginRepo = require('../repos/LoginRepo');
const jwt = require('jsonwebtoken');

var router = express.Router();

router.get('/', (req, res) => {

    var username = req.query.username;
    var password = req.query.password;

    LoginRepo.Login(username, password)
        .then(rows => {
            res.json(rows);
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
        })
})

router.get('/token', verifyToken, (req, res) => {
    jwt.verify(req.token, '123456key', (err, authData) => {
        if (err) {
            console.log("2");
            console.log(err);
            res.render('login');
        }
        else {
            console.log("-----------");
            console.log(authData);
            authData = authData.thisUser;
            console.log("6");
            LoginRepo.StaffLogin(authData.UserName, authData.Password)
                .then(rows => {
                    res.json(rows);
                }).catch(err => {
                    console.log(err);
                    res.statusCode = 500;
                })

        }
    })
})

router.get('/staff-login', (req, res) => {
    var username = req.query.username;
    var password = req.query.password;

    LoginRepo.StaffLogin(username, password)
        .then(rows => {
            var thisUser = {
                UserName: username,
                Password: password
            }
            const token = jwt.sign({ thisUser }, '123456key');
            rows.push(token);
            res.json(rows);
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
        })
})

function verifyToken(req, res, next) {
    var bearerHeader = req.headers.authorization || req.query.authorization || req.body.authorization;
    if (typeof bearerHeader !== 'undefined') {
        req.token = getCookie('Bearer', bearerHeader);
    }
    console.log("abc");
    next();
}

function getCookie(cname, cookie) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

module.exports = router;