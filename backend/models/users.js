const db = require("../../db");

async function findUsers() {
  return db.query({
    sql: `
    SELECT *
    FROM users
    ORDER BY id DESC
    `
  });
}

module.exports = {
  findUsers
};
