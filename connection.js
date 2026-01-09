var mysql = require("mysql2");
var util = require("util");


const conn = mysql.createConnection({
    host: "bpxx3bi5ggviysexvwtb-mysql.services.clever-cloud.com",
    user: "ukfnikjgc4vnbpkp",
    password: "A0ZVT5r5fSYQT16uhqVX",
    database: "bpxx3bi5ggviysexvwtb",
})
const exe = util.promisify(conn.query).bind(conn);


module.exports = exe;
