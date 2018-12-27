var db = require('../fn/mysql-db');

exports.Login = (username, password) =>{
    var sql = "select IDUser from user_account where Username =  '" + username + "' and Password = '" + password + "'";
    return db.load(sql);
}