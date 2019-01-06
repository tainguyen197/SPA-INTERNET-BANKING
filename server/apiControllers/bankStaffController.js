var express = require('express');
var bankStaffRepo = require('../repos/bankStaffRepo');

var router = express.Router();

router.post('/create-user-account', (req, res) => {
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
})

router.post('/create-checking-account', (req, res) => {
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

})



router.post('/recharge', (req, res) => {
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
})

module.exports = router;