var express = require('express');
var bankStaffRepo = require('../repos/bankStaffRepo');

var router = express.Router();

router.post('/create-user-account',(req,res) =>{
	var username = req.query.username;
	var password = req.query.password;
	var name = req.query.name;
	var email = req.query.email;
	var phone = req.query.phone;
	bankStaffRepo.createUserAccount(username, password, name, email, phone);
	/*.then(rows => {
		res.json(rows);
	}).catch(err =>{
		console.log(err);
		res.status = 500;
		res.end('View error log on console');
	})*/
})

router.post('/create-checking-account',(req,res) =>{
	bankStaffRep.createCheckingAccount(req.query.username)
	.then(rows => {
		res.json(rows);
	}).catch(err =>{
		console.log(err);
		res.status = 500;
		res.end('View error log on console');
	})
})

router.post('/recharge',(req,res) =>{
	bankStaffRep.reCharge(req.query.numberaccount,req.query.money)
	.then(rows => {
		res.json(rows);
	}).catch(err =>{
		console.log(err);
		res.status = 500;
		res.end('View error log on console');
	})
})

module.exports = router;