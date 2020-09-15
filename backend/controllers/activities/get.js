const router = require("express").Router();
const db = require("../../db");

module.exports = router;

router.get("/activities", async (req, res) => {
  let activities = db.query({
      sql: `
      SELECT * 
      FROM activities
      `
  })
  res.json({
      activities:  await activities
  });
});
