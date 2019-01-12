var express = require('express');
var bankStaffRepo = require('../repos/bankStaffRepo');
var LoginRepo = require('../repos/LoginRepo');
const jwt = require('jsonwebtoken');

var router = express.Router();

function verifyToken(req, res, next) {
	var bearerHeader = req.headers.authorization || req.query.authorization || req.body.authorization;
	console.log(bearerHeader);
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



router.post('/create-user-account', verifyToken, verifyToken, (req, res) => {
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
					console.log("VVVVVVVVVVVVVVV");
					var username = req.query.username;
					var password = req.query.password;
					var name = req.query.name;
					var email = req.query.email;
					var phone = req.query.phone;
					bankStaffRepo.createUserAccount(username, password)
						.then(rows => {
							res.json(rows);
							bankStaffRepo.getUserIDbyAccount(username)
								.then(data => {
									var id = data[0].IDUser;
									bankStaffRepo.createUserInfo(id, name, email, phone);
								})
						})
						.catch(err => {
							console.log(err);
							res.status = 500;
							res.end('View error log on console');
						})
				}).catch(err => {
					console.log(err);
					res.statusCode = 500;
				})

		}
	})
})

router.post('/create-checking-account', verifyToken, (req, res) => {
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
					bankStaffRepo.getUserIDbyAccount(req.query.username)
						.then(rows => {
							var id = rows[0].IDUser;

							var numberaccount = Math.floor(Math.random() * 100000).toString();
							bankStaffRepo.createCheckingAccount(id, numberaccount)
								.then(rows => {
									res.json(rows);
								}).catch(err => {
									console.log(err);
									res.status = 500;
									res.end('View error log on console');
								})

						})

				}).catch(err => {
					console.log(err);
					res.statusCode = 500;
				})

		}
	})
})



router.post('/recharge', verifyToken, (req, res) => {
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
					bankStaffRepo.getUserAccount(req.query.numberaccount)
						.then(rows => {
							var numberaccount = rows[0].NumberAccount;
							var balance = rows[0].Balance;
							bankStaffRepo.reCharge(balance, req.query.money, numberaccount)
								.then(rows => {
									res.json(rows);
								}).catch(err => {
									console.log(err);
									res.status = 500;
									res.end('View error log on console');
								})
						})
				}).catch(err => {
					console.log(err);
					res.statusCode = 500;
				})

		}
	})
})

module.exports = router;