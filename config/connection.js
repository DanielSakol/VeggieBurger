var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 4000,
  user: "root",
  password: "password",
  database: "burgers_db"
});
connection.connect();

connection.query('SELECT * from burgers', function(err, rows) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();