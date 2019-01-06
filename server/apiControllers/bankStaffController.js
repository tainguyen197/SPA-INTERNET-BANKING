var express = require('express');
var bankStaffRepo = require('../repos/bankStaffRepo');

var router = express.Router();

router.post('/create-user-account',(req,res) =>{
	var idUser = req.query.id;
	bankStaffRep.createUserAccount(req.query.username, req.query.password, req.query.name, req.query.email, req.query.phone)
	.then(rows => {
		res.json(rows);
	}).catch(err =>{
		console.log(err);
		res.status = 500;
		res.end('View error log on console');
	})
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