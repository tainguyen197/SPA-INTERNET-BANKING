var express = require('express');
var userRepo = require('../repos/userRepo');

var router = express.Router();
var nodemailer = require("nodemailer");
var smtpTransport = nodemailer.createTransport({
	host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "maihuutuan.jp@gmail.com",
        pass: "danghuulip"
    }
});

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

router.get('/loadUserInfoById', (req, res) => {
	var idUser = req.query.id;
	userRepo.loadUserInfoById(idUser)
		.then(rows => {
			res.json(rows);
		}).catch(err => {
			console.log(err);
			res.status = 500;
			res.end('View error log on console');
		})
})

router.get('/staff-loadUserInfoById', (req, res) => {
	var idUser = req.query.id;
	userRepo.StaffLoadUserInfoById(idUser)
		.then(rows => {
			res.json(rows);
		}).catch(err => {
			console.log(err);
			res.status = 500;
			res.end('View error log on console');
		})
})

router.get('loadUserTransactionsById', (req, res) => {
	var numberAccount = req.query.numberAccount;
	userRepo.loadUserTransactionsById(numberAccount)
		.then(rows => {
			res.json(rows);
		}).catch(err => {
			console.log(err);
			res.status = 500;
			res.end('View error log on console');
		})
})

router.get('/loadUserReceiverTransactionsById', (req, res) => {
	var numberAccount = req.query.numberAccount;
	userRepo.loadUserReceiverTransactionsById(numberAccount)
		.then(rows => {
			res.json(rows);
		}).catch(err => {
			console.log(err);
			res.status = 500;
			res.end('View error log on console');
		})
})
router.get('/staff-loadUserReceiverTransactionsById', (req, res) => {
	var numberAccount = req.query.numberAccount;
	userRepo.StaffLoadUserReceiverTransactionsById(numberAccount)
		.then(rows => {
			res.json(rows);
		}).catch(err => {
			console.log(err);
			res.status = 500;
			res.end('View error log on console');
		})
})


router.get('/loadUserReceiverById', (req, res) => {
	var Id = req.query.id;
	userRepo.loadUserReceiverById(Id)
		.then(rows => {
			res.json(rows);
		}).catch(err => {
			console.log(err);
			res.status = 500;
			res.end('View error log on console');
		})
})


router.get('/loadUserAccountsById', (req, res) => {
	var idUser = req.query.id;
	userRepo.loadUserAccountsById(idUser)
		.then(rows => {
			res.json(rows);
		}).catch(err => {
			console.log(err);
			res.status = 500;
			res.end('View error log on console');
		})
})

router.get('/loadUserInfoByNumberAccount', (req, res) => {
	var numberAccount = req.query.numberAccount;
	userRepo.loadUserInfoByNumberAccount(numberAccount)
		.then(rows => {
			res.json(rows);
		}).catch(err => {
			console.log(err);
			res.status = 500;
			res.end('View error log on console');
		})
})


router.post('/updateBalanceUp', (req, res) => {
	var money = req.body.money;
	var numberAccountTo = req.body.numberAccountTo;
	var AccountToBalance = req.body.AccountToBalance + money;
	console.log(req.body);
	userRepo.updateBalance(numberAccountTo, AccountToBalance)
		.then(rows => {
			res.json(rows);
		}).catch(err => {
			console.log(err);
			res.status = 500;
			res.end('View error log on console');
		})
})

router.post('/deleteAccount', (req, res) => {
	var numberAccount = req.query.numberAccount;
	console.log(numberAccount);
	userRepo.deleteAccount(numberAccount)
	.then(rows => {
		res.json(rows);
	}).catch(err => {
		console.log(err);
		res.status = 500;
		res.end('View error log on console');
	})
})

router.post('/updateBalanceDown', (req, res) => {
	var money = req.body.money;
	var numberAccountFrom = req.body.numberAccountFrom;
	var AccountFromBalance = req.body.AccountFromBalance - money;

	userRepo.updateBalance(numberAccountFrom, AccountFromBalance)
		.then(rows => {
			res.json(rows);
		}).catch(err => {
			console.log(err);
			res.status = 500;
			res.end('View error log on console');
		})
})

router.post('/deleteReceiver', (req, res) => {
	var transaction = req.query.numberAccount;
	userRepo.deleteReceiver(transaction)
		.then(rows => {
			res.json(rows);
		}).catch(err => {
			console.log(err);
			res.status = 500;
			res.end('View error log on console');
		})
})

router.post('/newTransaction', (req, res) => {
	var transaction = req.body;
	console.log(transaction);
	userRepo.newTransaction(transaction)
		.then(rows => {
			res.json(rows);
		}).catch(err => {
			console.log(err);
			res.status = 500;
			res.end('View error log on console');
		})
})

router.post('/newReicever', (req, res) => {
	var name = req.query.name;
	var account = req.query.account;
	var id = req.query.id
	userRepo.newReicever(name,account,id)
		.then(rows => {
			res.json(rows);
		}).catch(err => {
			console.log(err);
			res.status = 500;
			res.end('View error log on console');
		})
})
router.get('/get-opt', (req, res) => {
	
	var opt = Math.floor(Math.random()*100000).toString();
	let mailOptions = {
		from: ' "Grocery Shoppy" <maihuutuan.jp@gmail.com>',
		to: req.query.email,
		subject: "Please confirm OPT for your account",
		html: "Hello," + req.query.username + "<br> This is your OPT.<br><a href=#>"+opt+"</a>"
	};
	smtpTransport.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		else{
			console.log("------");
			res.json({
				'opt': opt
			})
		}
	})
	
})

module.exports = router;