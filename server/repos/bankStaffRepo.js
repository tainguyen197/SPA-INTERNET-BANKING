var db = require('../fn/mysql-db');

exports.createUserAccount = (username, password) => {
    var sql = "INSERT INTO user_account(IDUser,IDUser1,Username, Password) VALUES (null,1, '" + username + "','" + password + "')";
    return db.load(sql);
}

exports.getUserIDbyAccount = (username) => {
    var sql = "SELECT IDUser FROM user_account WHERE Username = '" + username + "'";
    return db.load(sql);
}

exports.getUserbyAccount = (username) => {
    var sql = "SELECT ID FROM user_account WHERE Username = '" + username + "'";
    return db.load(sql);
}

exports.createUserInfo = (id, name, email, phone) => {
    //var sql = "INSERT INTO history(ID,AccountNumberFrom,AccountNumberTo, Type, Time, MoneyTransaction, MoneyBalance) VALUES ("+ null + "," + transaciton.AccountNumberFrom + "," + transaciton.AccountNumberTo + ",'" + transaciton.Type + "','" + transaciton.Time + "'," + transaciton.MoneyTransaction + "," + transaciton.MoneyBalance +")" ;
    var sql = "INSERT INTO user (ID, HoTen, Email, Phone) VALUES (" + id + ",'" + name + "','" + email + "'," + phone + ")";
    return db.load(sql);
}

exports.createCheckingAccount = (id,numberaccount) => {
    sql = "INSERT INTO user_balances (IDUser,NumberAccount, Balance, Status) VALUES (" + id + "," + numberaccount + ", 0, 0)";
    return db.load(sql);
}
exports.getUserAccount = (NumberAccount) => {
    var sql = "SELECT NumberAccount, Balance FROM user_balances WHERE NumberAccount = " + NumberAccount;
    return db.load(sql);
}

exports.reCharge = (Balance, money,NumberAccount) => {
    sql = "UPDATE user_balances SET Balance = " + (parseFloat(Balance) + parseFloat(money)).toString() + " WHERE NumberAccount = " + NumberAccount;
    return db.load(sql);
}