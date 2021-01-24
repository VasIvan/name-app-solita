const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'DBVarna93',
  host: 'localhost',
  database: 'solita',
  port: 5432,
});

module.exports = pool;
