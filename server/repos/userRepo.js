var db = require('../fn/mysql-db');

exports.loadAll = () => {
	var sql = 'select * from user';
	return db.load(sql);
}

exports.loadUserAccountsById = (id) =>{
	var sql = 'select * from user_balances where IDUser= '+ id;
	return db.load(sql);
}

exports.loadUserReceiverById = (id) =>{
	var sql = 'select * from receiver_account where IDUser= '+ id;
	return db.load(sql);
}


exports.loadUserInfoById = (id) =>{
	var sql = 'select * from user where ID= '+ id;
	return db.load(sql);
}

exports.loadUserTransactionsById = (numberAccount) =>{
	var sql = 'select * from history where AccountNumber = '+ numberAccount;
	return db.load(sql);
}

