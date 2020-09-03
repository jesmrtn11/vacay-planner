const router = require("express").Router();

module.exports = router;

router.get("/users/self", (req, res) => {
  res.json({
    foo: 1
  });
});
