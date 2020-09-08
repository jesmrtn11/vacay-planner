const router = require("express").Router();
const { json } = require("../../middlewares");

module.exports = router;

router.post("/activities", json(), (req, res) => {
  if (!req.json) {
    return res.sendStatus(500);
  }
  res.json({
    example: req.json
  });
});
