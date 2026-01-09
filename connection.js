var mysql = require("mysql2");
var util = require("util");


const conn = mysql.createConnection({
    host: "bcd2j9o39qf0uxocx6jz-mysql.services.clever-cloud.com",
    user: "uw3diyvtly09cdbs",
    password: "fSIJqfMOlpxWetCeSkkh",
    database: "bcd2j9o39qf0uxocx6jz",
})
const exe = util.promisify(conn.query).bind(conn);


module.exports = exe;
