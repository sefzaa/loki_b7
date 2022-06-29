// import sequelize
const sequelize = require ("sequelize");
 
// create connection
const db = new sequelize('loki', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
 
// export connection
module.exports = db;
