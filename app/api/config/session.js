const session = require('express-session');
const mysqlStore = require('express-mysql-session')(session);
console.log(process.env)
const sessionStore = new mysqlStore({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

module.exports = session({
    secret: "my key",
    resave: false,
    saveUninitialized: false,
	store: sessionStore
})
