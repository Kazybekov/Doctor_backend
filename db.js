const Pool = require("pg").Pool;
//
// require('dotenv').config({
//   path:'../.env'
// })
//
// const constring="postgres://postgres1:dMF9b7xK2Q1o18aC9JN2gJLtHQYAQ7ld@dpg-cdrb535a499bn14rdh8g-a.frankfurt-postgres.render.com/db_assignment"
//
// const pool = new Pool({
//   constring,
// })

// console.log(process.env.DB_USER)
// const pool = new Pool({
//   user: process.env.DB_USER,
//   password:process.env.DB_PASSWORD,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB_NAME
// });


const pool = new Pool({
  user: "bycfhlnxxrbxkd",
  password:"78b885d1ce8cc24a8e2d7d215104af75ea71ae773ace9322b52aac02d8177612",
  host: "ec2-99-80-170-190.eu-west-1.compute.amazonaws.com",
  port: 5432,
  database: "d23sprlngt6rat",
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
