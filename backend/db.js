const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "18.156.36.216", 
  user: "root",
  password: "i9odGL3XMHfc",
  database: "vacation-db",
  namedPlaceholders: true
});

pool.query("SELECT 1", (err) => {
  if (!err) {
    console.log("mysql connected.");
  }
});

function query(args) {
  return new Promise((resolve, reject) => {
    pool.query(args, (err, rows) => !err ? resolve(rows) : reject(err));
  });
}

module.exports = {
  query
};
