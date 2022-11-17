const Pool = require("pg").Pool;
require('dotenv').config();
console.log(process.env.DB_USER)
const pool = new Pool({
  user: process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
});

// const pool = new Pool({
//   user: "postgres",
//   password:"admin",
//   host: "localhost",
//   port: 5432,
//   database: "homework"
// });

module.exports = pool;
