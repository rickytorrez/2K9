var dbProps = require ("./db_properties");
var mysqul = require("mysql");

module.exports = {
    getConnection: ()=>{
    return mysqul.createConnection({
        host: dbProps.host,
        user: dbProps.user,
        password: dbProps.password,
        database: dbProps.dbName
    })}
}