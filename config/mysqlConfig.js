var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
   host: "10.21.8.242",
   user: "root",
   password: "nutanix/4u",
   database: "uptick"
});

mysqlConnection.connect(function(err) {
    if (err) throw err;
});

module.exports = mysqlConnection;
