const mysql = require("mysql");


//mysql://cun6r3tow542tlmg:jxljz1ulytie2xsf@k2pdcy98kpcsweia.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ido9qmccnos2zi5v
let connection = mysql.createConnection({
  host: "k2pdcy98kpcsweia.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "cun6r3tow542tlmg",
  password: "jxljz1ulytie2xsf",
  database: "ido9qmccnos2zi5v"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
