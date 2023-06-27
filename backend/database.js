require("dotenv").config();
const mysql = require("mysql2/promise");

// Create a connection pool to the database

const database = mysql.createPool({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
});

// Try a connection

database
	.getConnection()
	.then(() => {
		console.info("Can reach database");
	})
	.catch((err) => {
		console.error(err);
	});

module.exports = database;
