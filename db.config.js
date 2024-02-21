const mysql = require("mysql2");

// Create a connection pool
const pool = mysql.createPool({
  host: "srv944.hstgr.io",
  user: "u904598717_sheetal",
  password: "Sheetal@#123",
  database: "u904598717_sheetal",
});

// Export the pool to use it in your routes/controllers
module.exports = pool.promise();
