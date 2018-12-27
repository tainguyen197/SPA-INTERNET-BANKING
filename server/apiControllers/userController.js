var express = require('express');
var productRepo = require('../repos/userRepo');

var router = express.Router();

router.get('/', (req, res) => {
	productRepo.loadAll()
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
	productRepo.loadUserInfoById(idUser)
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
	productRepo.loadUserTransactionsById(numberAccount)
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
	productRepo.loadUserAccountsById(idUser)
	.then(rows => {
		res.json(rows);
	}).catch(err =>{
		console.log(err);
		res.status = 500;
		res.end('View error log on console');
	})
})

module.exports = router;