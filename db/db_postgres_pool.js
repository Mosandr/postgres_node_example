const Pool = require('pg').Pool;

require('dotenv').config();
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST = 'localhost',
  DB_PORT,
  DB_NAME,
} = process.env;

const db = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
});

module.exports = db;
