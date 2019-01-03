var express = require('express');
var userRepo = require('../repos/userRepo');

var router = express.Router();

router.get('/', (req, res) => {
	userRepo.loadAll()
		.then(rows => {
			res.json(rows);
		}).catch(err => {
			console.log(err);
			res.statusCode = 500;
			res.end('View error log on console');
		})
})

router.get('/loadUserInfoById',(req,res) =>{
	var idUser = req.query.id;
	userRepo.loadUserInfoById(idUser)
	.then(rows => {
		res.json(rows);
	}).catch(err =>{
		console.log(err);
		res.status = 500;
		res.end('View error log on console');
	})
})

router.get('/loadUserTransactionsById',(req,res) =>{
	var numberAccount = req.query.numberAccount;
	userRepo.loadUserTransactionsById(numberAccount)
	.then(rows => {
		res.json(rows);
	}).catch(err =>{
		console.log(err);
		res.status = 500;
		res.end('View error log on console');
	})
})

router.get('/loadUserReceiverById',(req,res) =>{
	var Id = req.query.id;
	userRepo.loadUserReceiverById(Id)
	.then(rows => {
		res.json(rows);
	}).catch(err =>{
		console.log(err);
		res.status = 500;
		res.end('View error log on console');
	})
})


router.get('/loadUserAccountsById',(req,res) =>{
	var idUser = req.query.id;
	userRepo.loadUserAccountsById(idUser)
	.then(rows => {
		res.json(rows);
	}).catch(err =>{
		console.log(err);
		res.status = 500;
		res.end('View error log on console');
	})
})

router.get('/loadUserInfoByNumberAccount',(req,res) =>{
	var numberAccount = req.query.numberAccount;
	userRepo.loadUserInfoByNumberAccount(numberAccount)
	.then(rows => {
		res.json(rows);
	}).catch(err =>{
		console.log(err);
		res.status = 500;
		res.end('View error log on console');
	})
})


router.post('/updateBalanceUp',(req,res) =>{
	var money = req.body.money;
	var numberAccountTo = req.body.numberAccountTo;
	var AccountToBalance = req.body.AccountToBalance + money;
	console.log(req.body);
	userRepo.updateBalance(numberAccountTo,AccountToBalance)
	.then(rows => {
		res.json(rows);
	}).catch(err =>{
		console.log(err);
		res.status = 500;
		res.end('View error log on console');
	})
})


router.post('/updateBalanceDown',(req,res) =>{
	var money = req.body.money;
	var numberAccountFrom = req.body.numberAccountFrom;
	var AccountFromBalance = req.body.AccountFromBalance - money;
	
	userRepo.updateBalance(numberAccountFrom,AccountFromBalance)
	.then(rows => {
		res.json(rows);
	}).catch(err =>{
		console.log(err);
		res.status = 500;
		res.end('View error log on console');
	})
})

router.post('/newTransaction',(req,res) =>{
	var transaction = req.body;
	console.log(transaction);
	userRepo.newTransaction(transaction)
	.then(rows => {
		res.json(rows);
	}).catch(err =>{
		console.log(err);
		res.status = 500;
		res.end('View error log on console');
	})
})

module.exports = router;