const Pool = require('pg').Pool;

const dbConfig = require('../dbconfig');

module.exports = new Pool(dbConfig);
