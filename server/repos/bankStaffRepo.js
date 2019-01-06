var db = require('../fn/mysql-db');

exports.createUserAccount = (username, password, name, email, phone) =>{
    var sql = "SELECT IDUser FROM user_account WHERE IDUser = 'tainguyen197'";
    db.load(sql).then(result => {
        console.log(result[0].IDUser);
    })
    
    
    //return db.load(sql);

}

exports.createCheckingAccount = (username, password, name, email, phone) =>{
    var sql = "INSERT INTO user VALUES (" + username + ","+password+"," + "";
    return db.load(sql);
}

exports.reCharge = (id,money) =>{
    var sql = "INSERT INTO user VALUES (" + username + ","+password+"," + "";
    return db.load(sql);
}