var db = require('../fn/mysql-db');

exports.loadAll = () => {
	var sql = 'select * from user';
	return db.load(sql);
}

exports.loadUserAccountsById = (id) =>{
	var sql = 'select * from user_balances where IDUser= '+ id;
	return db.load(sql);
}

exports.deleteAccount = (numberAccount) =>{
	var sql = 'UPDATE user_balances SET Status = 1 WHERE NumberAccount = ' + numberAccount;
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

exports.loadUserInfoByNumberAccount = (numberAccount) =>{
	var sql = 'select user.HoTen, user_balances.Balance from user,user_balances where user_balances.IDUser = user.ID and  user_balances.NumberAccount= '+ numberAccount;
	return db.load(sql);
}

exports.loadUserTransactionsById = (numberAccount) =>{
	var sql = 'select * from history where AccountNumberFrom = '+ numberAccount;
	return db.load(sql);
}

exports.loadUserReceiverTransactionsById = (numberAccount) =>{
	var sql = 'select * from history where AccountNumberTo = '+ numberAccount;
	return db.load(sql);
}

exports.updateBalance = (numberAccount, money) => {
	var sql = 'UPDATE user_balances SET Balance = '+ money + ' WHERE NumberAccount =' + numberAccount ;
	console.log(sql);
	return db.load(sql);
}

exports.newTransaction = (transaciton) =>{
	var sql = "INSERT INTO history(ID,AccountNumberFrom,AccountNumberTo, Type, Time, MoneyTransaction, MoneyBalance) VALUES ("+ null + "," + transaciton.AccountNumberFrom + "," + transaciton.AccountNumberTo + ",'" + transaciton.Type + "','" + transaciton.Time + "'," + transaciton.	MoneyTransaction + "," + transaciton.	MoneyBalance +")" ;
	return db.load(sql);
}
