var db = require('../fn/mysql-db');

exports.createUserAccount = (username, password, name, email, phone) =>{
    var sql = "INSERT INTO user_account (Username, Password) VALUES ('"+ username+"','"+password+"')";
    db.load(sql);
    sql = "SELECT IDUser FROM user_account WHERE Username = '"+username+"'";
    db.load(sql).then(result => {
        sql = "INSERT INTO user (ID, HoTen, Email, Phone) VALUES (" + result[0].IDUser+ ",'" + name + "','"+email+"','"+phone+"')";
        return db.load(sql);
    })
}

exports.createCheckingAccount = (username) =>{
    sql = "SELECT IDUser FROM user_account WHERE Username = '"+username+"'";
    db.load(sql).then(result => {
        sql = "INSERT INTO user_balances (IDUser, Balance, Status) VALUES ("+ result[0].IDUser + ", 0, 0)";
        return db.load(sql);
    })
}

exports.reCharge = (NumberAccount, money) =>{
    sql = "SELECT NumberAccount, Balance FROM user_balances WHERE NumberAccount = "+NumberAccount;
    db.load(sql).then(result => {
        sql = "UPDATE user_account SET Balance = " + (parseFloat(result[0].Balance) + parseFloat(money)).toString() + "WHERE NumberAccount = " + NumberAccount;
        return db.load(sql);
    })
}